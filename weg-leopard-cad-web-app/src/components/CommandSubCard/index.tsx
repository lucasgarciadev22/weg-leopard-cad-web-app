import ReactMarkdown from "react-markdown";
import { CommandListSubsection, Subsection } from "../../models/QuickGuide";
import { KeyboardHideOutlined } from "@mui/icons-material";
import { ICON_SIZE, IconWrapper } from "../../styles/GlobalStyles";

const CommandSubCard: React.FC<{ subsection: Subsection }> = ({
  subsection,
}) => {
  return (
    <div>
      <IconWrapper>
        <KeyboardHideOutlined fontSize={ICON_SIZE.L} />
        <h2>{subsection?.name}</h2>
      </IconWrapper>
      {(subsection as CommandListSubsection).commands && (
        <div>
          <ul>
            {(subsection as CommandListSubsection).commands.map(
              (command, index) => (
                <li key={index}>
                  <ReactMarkdown>{command}</ReactMarkdown>
                </li>
              )
            )}
          </ul>
        </div>
      )}
      {(subsection as CommandListSubsection).text && (
        <ReactMarkdown>{subsection?.text.join("\n")}</ReactMarkdown>
      )}
    </div>
  );
};

export default CommandSubCard;
