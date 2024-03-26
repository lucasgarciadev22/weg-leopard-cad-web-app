import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Subsection, ToolSubsection } from "../../models/QuickGuide";
import { getIcon } from "../../backend/services/IconService";
import {
  GlobalLargeImg,
  GlobalMediumImg,
  IconWrapper,
} from "../../styles/GlobalStyles";

const ToolSubCard: React.FC<{ subsection: Subsection }> = ({ subsection }) => {
  return (
    <div>
      <IconWrapper>
        <GlobalMediumImg src={getIcon(subsection?.icon)} />
        <h2>{subsection?.name}</h2>
      </IconWrapper>
      <div>
        {(subsection as ToolSubsection).shortcuts && (
          <ReactMarkdown>
            {`Shortcuts: ${(subsection as ToolSubsection).shortcuts}`}
          </ReactMarkdown>
        )}
        {(subsection as ToolSubsection).steps && (
          <ul>
            {(subsection as ToolSubsection).steps.map((step, index) => (
              <li key={index}>
                <ReactMarkdown>{step}</ReactMarkdown>
              </li>
            ))}
          </ul>
        )}
        {(subsection as ToolSubsection).text && (
          <>
            {subsection?.text.map((text, index) => (
              <div key={index}>
                {text.startsWith("```csharp") ? (
                  <SyntaxHighlighter language="csharp" style={atomDark}>
                    {text.replace("```csharp", "")}
                  </SyntaxHighlighter>
                ) : text.startsWith("```XAML") ? (
                  <SyntaxHighlighter language="xml" style={atomDark}>
                    {text.replace("```XAML", "")}
                  </SyntaxHighlighter>
                ) : (
                  <ReactMarkdown>{text}</ReactMarkdown>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ToolSubCard;
