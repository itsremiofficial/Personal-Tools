import React from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownComponentProps {
  code: string;
}

const MarkdownComponent: React.FC<MarkdownComponentProps> = ({ code }) => {
  return (
    <Markdown
      children={code}
      components={{
        code({ children, className }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              style={dark}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default MarkdownComponent;
