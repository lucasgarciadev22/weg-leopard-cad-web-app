import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import { Section, Subsection } from "../../models/QuickGuide";
import { GuideCard, GuideCardContent, GuideSubCard } from "./styles";
import { getIcon } from "../../services/IconServices";

const QuickGuide: React.FC<{
  setSelectedSubsection: (subsection: Subsection) => void;
}> = ({ setSelectedSubsection }) => {
  const [guideData, setGuideData] = useState<Section[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuideData = async () => {
      try {
        const data: Section[] = await fetchQuickGuideData();
        console.log(data);
        setGuideData(data);
      } catch (error) {
        console.error("Error fetching guide data:", error);
      }
    };

    fetchGuideData();
  }, []);

  const handleSubsectionClick = (subsection: Subsection) => {
    setSelectedSubsection(subsection);
    navigate(
      `/quick-guide/${subsection.name.toLowerCase().replace(/\s+/g, "-")}`
    );
  };

  return (
    <>
      <h1>Quick Guide</h1>
      <br />
      {guideData?.map((section, index) => (
        <GuideCard key={index}>
          <GuideCard.Body>
            <GuideCard.Title>
              <h3>{section.header}</h3>
            </GuideCard.Title>
            <GuideCard.Text>{section.description}</GuideCard.Text>
            <GuideSubCard>
              {section.subsections?.map((subsection, subIndex) => (
                <GuideCardContent
                  key={subIndex}
                  onClick={() => handleSubsectionClick(subsection)}
                >
                  {subsection.icon && (
                    <img
                      src={getIcon(subsection.icon)}
                      height={25}
                      alt="Icon"
                    />
                  )}
                  <h6>{subsection.name}</h6>
                </GuideCardContent>
              ))}
            </GuideSubCard>
          </GuideCard.Body>
        </GuideCard>
      ))}
    </>
  );
};

export default QuickGuide;
