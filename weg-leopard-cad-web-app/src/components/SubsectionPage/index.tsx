import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Subsection,
  ToolSubsection,
  CommandListSubsection,
  Section,
} from "../../models/QuickGuide";
import ReactMarkdown from "react-markdown";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";

interface SubsectionPageProps {
  receivedSubsection?: Subsection;
}

const SubsectionPage: React.FC<SubsectionPageProps> = ({
  receivedSubsection,
}) => {
  const { name } = useParams<{ name: string }>();
  const [subsection, setSubsection] = useState<Subsection | undefined>(
    receivedSubsection
  );

  useEffect(() => {
    if (!subsection) {
      fetchGuideData();
    }
  }, [subsection]);

  const fetchGuideData = async () => {
    try {
      const data: Section[] = await fetchQuickGuideData();
      const foundSubsection = findSubsectionByName(data, name || "");
      setSubsection(foundSubsection);
    } catch (error) {
      console.error("Error fetching guide data:", error);
    }
  };

  const findSubsectionByName = (
    sections: Section[],
    name: string
  ): Subsection | undefined => {
    for (const section of sections) {
      for (const subsection of section.subsections || []) {
        if (subsection.name.toLowerCase().replace(/\s+/g, "-") === name) {
          return subsection;
        }
      }
    }
    return undefined;
  };

  if (!subsection) {
    return null;
  }

  return (
    <div>
      <h2>{subsection?.name}</h2>
      {subsection?.type === "tool-subsection" && (
        <div>
          {(subsection as ToolSubsection).shortcuts && (
            <ReactMarkdown>{`Shortcuts: ${
              (subsection as ToolSubsection).shortcuts
            }`}</ReactMarkdown>
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
            <ReactMarkdown>{subsection?.text.join("\n")}</ReactMarkdown>
          )}
        </div>
      )}
      {subsection?.type === "command-list-subsection" && (
        <div>
          {(subsection as CommandListSubsection).commands && (
            <ul>
              {(subsection as CommandListSubsection).commands.map(
                (command, index) => (
                  <li key={index}>
                    <ReactMarkdown>{command}</ReactMarkdown>
                  </li>
                )
              )}
            </ul>
          )}
          {(subsection as CommandListSubsection).text && (
            <ReactMarkdown>{subsection?.text.join("\n")}</ReactMarkdown>
          )}
        </div>
      )}
    </div>
  );
};

export default SubsectionPage;
