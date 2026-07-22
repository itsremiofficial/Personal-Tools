interface SearchIndexEntry {
  name: string;
  displayName: string;
  version: string;
  pathCount: number;
  elementCounts: Record<string, number>;
  labels: string[];
  pathCommands: string[];
}

interface SearchIndex {
  version: number;
  generatedAt: string;
  icons: SearchIndexEntry[];
}

interface SearchResult {
  name: string;
  version: string;
  score: number;
  matchReasons: string[];
}

const INDEX_URL = `${import.meta.env.BASE_URL}search-index.json`;

let cachedIndex: SearchIndex | null = null;
let indexLoadPromise: Promise<SearchIndex | null> | null = null;

export function getIndexUrl(): string {
  return INDEX_URL;
}

export async function loadSearchIndex(): Promise<SearchIndex | null> {
  if (cachedIndex) return cachedIndex;
  if (indexLoadPromise) return indexLoadPromise;

  indexLoadPromise = (async () => {
    try {
      const res = await fetch(INDEX_URL);
      if (!res.ok)
        throw new Error(`Failed to load search index: ${res.status}`);
      cachedIndex = await res.json();
      return cachedIndex;
    } catch {
      cachedIndex = { version: 1, generatedAt: "", icons: [] };
      return cachedIndex;
    } finally {
      indexLoadPromise = null;
    }
  })();

  return indexLoadPromise;
}

const SYNONYMS: Record<string, string[]> = {
  circle: [
    "round",
    "circular",
    "ring",
    "dot",
    "cycle",
    "orb",
    "loop",
    "ball",
    "sphere",
    "wheel",
  ],
  square: [
    "box",
    "block",
    "rectangle",
    "quad",
    "tile",
    "grid",
    "frame",
    "cube",
  ],
  line: ["stroke", "rule", "bar", "stripe", "dash", "border", "edge", "linear"],
  arrow: [
    "chevron",
    "direction",
    "pointer",
    "caret",
    "triangle",
    "next",
    "back",
    "forward",
    "previous",
  ],
  cross: ["x", "close", "cancel", "remove", "delete", "multiply", "times"],
  check: [
    "tick",
    "yes",
    "confirm",
    "done",
    "complete",
    "verified",
    "correct",
    "approve",
  ],
  heart: ["love", "favorite", "like", "care", "romance"],
  star: ["favorite", "rating", "review", "sparkle", "shine", "glow"],
  lock: ["secure", "lock", "privacy", "safety", "protected", "padlock"],
  mail: ["email", "message", "envelope", "letter", "inbox", "send"],
  phone: ["call", "telephone", "contact", "mobile", "smartphone", "cell"],
  search: ["find", "magnifier", "explore", "lookup", "scan", "browse"],
  home: ["house", "building", "residence", "dashboard", "main"],
  user: ["person", "profile", "account", "avatar", "member", "people", "human"],
  settings: [
    "gear",
    "preferences",
    "configuration",
    "options",
    "control",
    "setting",
    "cog",
  ],
  bell: ["notification", "alert", "alarm", "ring", "reminder", "notify"],
  calendar: ["date", "event", "schedule", "time", "day", "month", "year"],
  camera: ["photo", "image", "picture", "video", "record", "photography"],
  download: ["save", "import", "receive", "install", "retrieve"],
  upload: ["export", "send", "share", "publish", "submit"],
  trash: ["delete", "bin", "remove", "discard", "garbage", "recycle"],
  edit: ["pencil", "write", "modify", "change", "update", "pen", "draw"],
  add: ["plus", "new", "create", "include", "append", "increase", "addition"],
  minus: ["subtract", "remove", "delete", "decrease", "reduce", "less"],
  play: ["start", "run", "begin", "video", "music", "media", "player"],
  pause: ["stop", "break", "wait", "hold", "freeze", "interrupt"],
  music: ["audio", "sound", "tune", "song", "melody", "note", "rhythm"],
  document: ["file", "paper", "text", "page", "doc", "report", "folder"],
  folder: ["directory", "file", "storage", "organize", "collection"],
  alert: ["warning", "danger", "caution", "attention", "error", "exclamation"],
  info: ["information", "help", "support", "detail", "about", "hint"],
  question: ["help", "faq", "support", "inquiry", "unknown", "ask"],
  menu: ["hamburger", "list", "navigation", "options", "sidebar"],
  share: ["export", "send", "forward", "spread", "broadcast"],
  copy: ["duplicate", "clone", "replicate", "paste"],
  cut: ["scissor", "trim", "clip", "remove"],
  refresh: ["reload", "update", "sync", "renew", "reload", "spin"],
  sun: ["light", "brightness", "day", "sunny", "illuminate"],
  moon: ["dark", "night", "sleep", "darkness", "moonlight"],
  wifi: ["wireless", "network", "signal", "connection", "internet"],
  battery: ["power", "charge", "energy", "fuel", "cell", "level"],
  gift: ["present", "reward", "bonus", "offer", "surprise"],
  flag: ["marker", "banner", "indicator", "pin"],
  location: ["pin", "map", "marker", "place", "address", "navigation", "gps"],
  globe: ["world", "earth", "global", "international", "planet"],
  book: ["read", "library", "page", "literature", "document", "notebook"],
  bag: ["shopping", "store", "purchase", "cart", "buy"],
  clock: ["time", "watch", "hour", "minute", "timer", "alarm"],
  chart: ["graph", "bar", "pie", "analytics", "statistics", "data"],
  printer: ["print", "paper", "document", "output", "office"],
  monitor: ["screen", "display", "desktop", "computer", "pc"],
  mobile: ["phone", "smartphone", "device", "cellphone", "handheld"],
  cloud: ["storage", "server", "internet", "network", "upload", "sync"],
  video: ["camera", "record", "film", "movie", "playback", "media"],
  microphone: ["mic", "audio", "sound", "voice", "speech", "record"],
  tag: ["label", "badge", "identifier", "keyword", "category"],
  wallet: ["money", "payment", "finance", "purse", "account", "card"],
  cart: ["shopping", "buy", "purchase", "basket", "store", "checkout"],
  eye: ["view", "visible", "show", "preview", "see", "vision"],
  hide: ["invisible", "hidden", "private", "blind", "eye off"],
};

function expandQuery(query: string): string[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const expanded = new Set<string>();
  for (const term of terms) {
    expanded.add(term);
    for (const [word, syns] of Object.entries(SYNONYMS)) {
      if (word === term) {
        syns.forEach((s) => expanded.add(s));
        break;
      }
    }
  }
  for (const term of terms) {
    for (const [word, syns] of Object.entries(SYNONYMS)) {
      if (syns.includes(term)) {
        expanded.add(word);
        break;
      }
    }
  }
  return [...expanded];
}

function levenshtein(a: string, b: string): number {
  const m = a.length,
    n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0),
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function getQueryWordCoverage(
  icon: SearchIndexEntry,
  queryWords: string[],
  nameWords: string[],
  nameLower: string,
): number {
  if (queryWords.length <= 1) return 1;
  let covered = 0;
  for (const qw of queryWords) {
    if (qw.length < 2) continue;
    const matched =
      nameWords.some((nw) => nw === qw || nw.includes(qw) || qw.includes(nw)) ||
      nameLower.includes(qw) ||
      icon.labels.some(
        (l) => l.length > 1 && (l.includes(qw) || qw.includes(l)),
      );
    if (matched) covered++;
  }
  return covered / queryWords.length;
}

function scoreIcon(
  icon: SearchIndexEntry,
  query: string,
  expandedTerms: string[],
): SearchResult {
  const matchReasons: string[] = [];
  let score = 0;
  const nameLower = icon.name.toLowerCase();
  const displayLower = icon.displayName.toLowerCase();
  const queryLower = query.toLowerCase().trim();

  if (
    icon.name === `Icon${query.replace(/\s+/g, "")}` ||
    icon.displayName.toLowerCase() === queryLower
  ) {
    score += 100;
    matchReasons.push("Exact match");
  }

  const nameWords = displayLower.split(/\s+/).filter((w) => w.length > 1);
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 1);

  let matchedName = false;
  for (const qw of queryWords) {
    if (
      nameWords.some((nw) => nw === qw || nw.includes(qw) || qw.includes(nw))
    ) {
      score += 30;
      if (!matchedName) matchReasons.push(`Name: "${qw}"`);
      matchedName = true;
    }
  }

  let matchedShape = false;
  for (const term of expandedTerms) {
    if (term.length < 3) continue;

    if (nameLower.includes(term) && !matchedName) {
      score += 15;
      if (!matchReasons.some((r) => r.includes(term)))
        matchReasons.push(`Name: "${term}"`);
    }

    for (const label of icon.labels) {
      if (label.length < 3) continue;
      if (label.includes(term) || term.includes(label)) {
        score += 8;
        if (!matchReasons.some((r) => r.includes(label)))
          matchReasons.push(`"${label}"`);
        break;
      }
    }

    if (!matchedShape) {
      const shapeTerms = [
        "circle",
        "square",
        "line",
        "arrow",
        "path",
        "curve",
        "arc",
        "rounded",
      ];
      for (const shape of shapeTerms) {
        if (
          shape.length > 2 &&
          (term.includes(shape) || shape.includes(term))
        ) {
          const count = icon.elementCounts[shape] || 0;
          if (count > 0) {
            score += 8 * count;
            if (!matchReasons.some((r) => r.includes(shape)))
              matchReasons.push(`Shape: ${count} ${shape}(s)`);
            matchedShape = true;
          }
          break;
        }
      }
    }
  }

  if (queryWords.length > 0 && nameWords.length > 0) {
    const bestDist = Math.min(
      ...queryWords.map((qw) =>
        Math.min(...nameWords.map((nw) => levenshtein(qw, nw))),
      ),
    );
    if (bestDist > 0 && bestDist <= 2) {
      score += 8 - bestDist * 2;
      if (!matchReasons.includes("Fuzzy")) matchReasons.push("Fuzzy");
    }
  }

  for (const term of expandedTerms) {
    if (term.length < 3) continue;
    const numMatch = term.match(/\d+/);
    if (numMatch && nameLower.includes(numMatch[0])) {
      score += 8;
      if (!matchReasons.some((r) => r.includes(numMatch[0])))
        matchReasons.push(`Number: ${numMatch[0]}`);
    }
  }

  const coverage = getQueryWordCoverage(icon, queryWords, nameWords, nameLower);
  if (coverage < 1) {
    score = Math.round(score * coverage * coverage);
  } else if (queryWords.length > 1) {
    score += 20;
  }

  return {
    name: icon.name,
    version: icon.version,
    score: Math.min(score, 200),
    matchReasons: [...new Set(matchReasons)].slice(0, 3),
  };
}

export async function searchIcons(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length === 0) return [];
  const index = await loadSearchIndex();
  if (!index) return [];
  const expandedTerms = expandQuery(query);

  const results = index.icons
    .map((icon) => scoreIcon(icon, query, expandedTerms))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return results;
}

export async function getSuggestions(
  query: string,
): Promise<{ name: string; version: string }[]> {
  if (!query || query.length < 2) return [];
  const index = await loadSearchIndex();
  if (!index) return [];
  const q = query.toLowerCase();
  return index.icons
    .filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.displayName.toLowerCase().includes(q),
    )
    .slice(0, 8)
    .map((i) => ({ name: i.name, version: i.version }));
}
