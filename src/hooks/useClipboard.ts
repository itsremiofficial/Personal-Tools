import { useState, useCallback } from "react";
import { copyToClipboard as copyUtil } from "@/utils/copyToClipboard";
import { toast } from "sonner";

interface UseClipboardOptions {
  timeout?: number;
  onSuccess?: (text: string, label: string) => void;
  onError?: (error: unknown) => void;
}

/**
 * A React hook that provides clipboard functionality with visual feedback
 */
export function useClipboard(options: UseClipboardOptions = {}) {
  const { timeout = 2000, onSuccess, onError } = options;
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = useCallback(
    async (text: string, label: string = "Text", desc = false) => {
      setIsLoading(true);
      setError(null);

      try {
        const success = await copyUtil(text, label, {
          onSuccess: () => {
            if (onSuccess) onSuccess(text, label);
          },
          onError: (err) => {
            if (onError) onError(err);
            setError(err instanceof Error ? err : new Error("Failed to copy"));
          },
        });

        if (success) {
          setCopied(label);
          if (timeout) {
            setTimeout(() => setCopied(null), timeout);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to copy"));
        if (onError) onError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [timeout, onSuccess, onError, toast]
  );

  const reset = useCallback(() => {
    setCopied(null);
    setError(null);
  }, []);

  return {
    copied,
    error,
    isLoading,
    copyToClipboard,
    reset,
  };
}
