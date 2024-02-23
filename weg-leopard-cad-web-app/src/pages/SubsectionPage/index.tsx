import React, { useEffect, useState } from "react";
import * as QuickGuide from "../../models/QuickGuide";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import { useParams } from "react-router-dom";
import ToolSubCard from "../../components/ToolSubCard";
import CommandSubCard from "../../components/CommandSubCard";

interface SubsectionPageProps {
  receivedSubsection?: QuickGuide.Subsection;
}

const SubsectionPage: React.FC<SubsectionPageProps> = ({
  receivedSubsection,
}) => {
  const { name } = useParams<{ name: string }>();
  const [subsection, setSubsection] = useState<
    QuickGuide.Subsection | undefined
  >(receivedSubsection);

  useEffect(() => {
    if (!subsection) {
      fetchGuideData();
    }
  }, [subsection]);

  const fetchGuideData = async () => {
    try {
      const data: QuickGuide.Section[] = await fetchQuickGuideData();
      const foundSubsection = findSubsectionByName(data, name || "");
      setSubsection(foundSubsection);
    } catch (error) {
      console.error("Error fetching guide data:", error);
    }
  };

  const findSubsectionByName = (
    sections: QuickGuide.Section[],
    name: string
  ): QuickGuide.Subsection | undefined => {
    for (const section of sections) {
      for (const subsection of section.subsections || []) {
        if (
          subsection.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/\//g, "-") === name
        ) {
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
      {subsection?.type === "tool-subsection" && (
        <ToolSubCard subsection={subsection} />
      )}
      {subsection?.type === "command-list-subsection" && (
        <CommandSubCard subsection={subsection} />
      )}
    </div>
  );
};

export default SubsectionPage;
