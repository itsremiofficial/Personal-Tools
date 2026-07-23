import React from "react";
import { IconMagicStick3 } from "@/components/icons/version01";
import { cn } from "@/lib";
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
          "self-center rounded-full relative w-full sm:w-54 gap-1.5 px-4",
          loading && "px-4 py-6",
        )}
      >
        {loading ? (
          <>
            <Progress
              root="w-full h-4 bg-white/20"
              indicator="bg-primary"
              value={progress}
            />
          </>
        ) : (
          <>
            Generate <IconMagicStick3 className="size-5 ml-1" />
          </>
        )}
      </Button>
    </div>
  ),
);

GenerateButton.displayName = "GenerateButton";
