import React from "react";
import { Button } from "./ui/button";
import { AiBeautifyIcon, Loading03Icon } from "hugeicons-react";
import { Progress } from "./ui/progress";
import { cn } from "../hooks/formatSvgCode";

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading?: boolean;
  progress?: number;
}

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
          "self-center relative w-54 gap-1.5",
          loading && "!px-4 !py-6"
        )}
      >
        {loading ? (
          <>
            <Progress value={progress} className="w-full h-4" />
          </>
        ) : (
          <>
            Generate <AiBeautifyIcon className="size-5 ml-1" />
          </>
        )}
      </Button>
      {/* {loading && <Progress value={progress} className="w-full" />} */}
    </div>
  )
);

GenerateButton.displayName = "GenerateButton";
