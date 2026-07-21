const RATE_LIMIT_DELAY = 100; // milliseconds between requests
const MAX_RETRIES = 3;

// Simple queue for rate limiting
const queue = async <T>(
  tasks: (() => Promise<T>)[],
  delay: number
): Promise<T[]> => {
  const results: T[] = [];
  for (const task of tasks) {
    try {
      const result = await task();
      results.push(result);
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (error) {
      console.error('Task failed:', error);
      results.push([] as unknown as T);
    }
  }
  return results;
};

export const fetchRelatedKeywords = async (
  phrase: string,
  retryCount = 0
): Promise<string[]> => {
  try {
    const encodedPhrase = encodeURIComponent(phrase);
    const response = await fetch(
      `https://api.datamuse.com/words?ml=${encodedPhrase}&max=15`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return [
      phrase,
      ...data.slice(0, 9).map((item: { word: string }) => item.word),
    ].filter((word) => word.length > 1);
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      // Exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, retryCount) * 1000)
      );
      return fetchRelatedKeywords(phrase, retryCount + 1);
    }
    console.error('Error fetching related keywords:', error);
    return [phrase];
  }
};

export const fetchKeywordsInBatches = async (
  words: string[],
  batchSize = 10
): Promise<string[][]> => {
  const batches: string[][] = [];
  for (let i = 0; i < words.length; i += batchSize) {
    const batch = words.slice(i, i + batchSize);
    const tasks = batch.map(word => () => fetchRelatedKeywords(word));
    const results = await queue(tasks, RATE_LIMIT_DELAY);
    batches.push(...results);
  }
  return batches;
};

export const extractWordsFromFileName = (fileName: string): string[] => {
  return fileName
    .replace(/\.svg$/i, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter((word) => word.length > 0);
};
