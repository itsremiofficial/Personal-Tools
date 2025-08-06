import { toast } from "sonner";

/**
 * Enhanced copy to clipboard with visual feedback and error handling
 * This version doesn't use React hooks, making it safe to use anywhere
 */
export function copyToClipboard(
  text: string,
  label: string = "Text",
  options?: {
    successMessage?: string;
    errorMessage?: string;
    onSuccess?: () => void;
    onError?: (error: unknown) => void;
  }
): Promise<boolean> {
  const defaultOptions = {
    successMessage: `${label} copied to clipboard`,
    errorMessage: "Failed to copy to clipboard",
    onSuccess: () => {},
    onError: (error: unknown) => console.error("Copy error:", error),
  };

  const opts = { ...defaultOptions, ...options };

  // Determine which clipboard API to use based on environment and availability
  // This provides better compatibility across different browsers and platforms
  let copyPromise: Promise<void>;

  // Use the most modern API available
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    copyPromise = navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    copyPromise = new Promise((resolve, reject) => {
      try {
        // Create temporary element
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Make it invisible but part of the document
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);

        // Select and copy
        textArea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (success) {
          resolve();
        } else {
          reject(new Error("execCommand returned false"));
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  // Handle the copy operation and provide feedback
  return copyPromise
    .then(() => {
      toast.success(opts.successMessage, {
        description:
          text.length <= 0
            ? text.length > 40
              ? `${text.substring(0, 37)}...`
              : text
            : "",
        duration: 2000,
      });
      opts.onSuccess();
      return true;
    })
    .catch((error) => {
      toast.error(opts.errorMessage, {
        description: "Please try manually selecting and copying the text.",
        duration: 3000,
      });
      opts.onError(error);
      return false;
    });
}
