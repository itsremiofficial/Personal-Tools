/* eslint-disable @typescript-eslint/no-explicit-any */

import { PropsWithChildren, useEffect, useRef } from "react";

const CodeHighlight = ({ children }: PropsWithChildren) => {
  const highlightElement = useRef<any>(null);

  useEffect(() => {
    (async () => {
      if (highlightElement?.current) {
        const hljs = await import("highlight.js");
        hljs.default.highlightElement(
          highlightElement.current.querySelector("pre")
        );
      }
    })();
  }, []);

  return (
    <div ref={highlightElement} className="highlight-el">
      {children}
    </div>
  );
};

export default CodeHighlight;
