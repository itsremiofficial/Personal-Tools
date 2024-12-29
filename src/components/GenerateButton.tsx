import React from "react";
import { Button } from "./ui/button";
import { AiBeautifyIcon, Loading03Icon } from "hugeicons-react";

interface GenerateButtonProps {
  onClick: () => void | Promise<void>;
  disabled: boolean;
  loading?: boolean;
}

export const GenerateButton = React.memo(
  ({ onClick, disabled, loading = false }: GenerateButtonProps) => (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      size="lg"
      className="w-max self-center"
    >
      {loading ? (
        <>
          <Loading03Icon className="size-5 mr-2 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          Generate <AiBeautifyIcon className="size-5 ml-1" />
        </>
      )}
    </Button>
  )
);

GenerateButton.displayName = "GenerateButton";
