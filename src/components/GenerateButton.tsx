import React from "react";
import { AiBeautifyIcon } from "hugeicons-react";
import { cn } from "@/hooks";
import { Button } from "./common/Button";
import { Progress } from "./common/Progress";

export const GenerateButton = React.memo(
  ({
    onClick,
    disabled,
    loading = false,
    progress = 0,
  }: GenerateButtonProps) => (
    <div className="flex flex-col gap-2">
      <Button
        onClick={onClick}
        disabled={disabled || loading}
        size="lg"
        className={cn(
          "self-center relative w-54 gap-1.5 !px-4",
          loading && "!px-4 !py-6"
        )}
      >
        {loading ? (
          <>
            <Progress
              root="w-full h-4 bg-white/20"
              indicator="bg-icu-100"
              value={progress}
            />
          </>
        ) : (
          <>
            Generate <AiBeautifyIcon className="size-5 ml-1" />
          </>
        )}
      </Button>
    </div>
  )
);

GenerateButton.displayName = "GenerateButton";
