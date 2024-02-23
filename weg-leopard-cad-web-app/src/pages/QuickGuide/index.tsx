import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import { Section, Subsection } from "../../models/QuickGuide";
import { GuideCard, GuideCardContent, GuideSubCard } from "./styles";
import { getIcon } from "../../backend/services/IconServices";
import { GlobalSmallImg, ICON_SIZE } from "../../styles/GlobalStyles";
import { KeyboardHideOutlined } from "@mui/icons-material";

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
      `/quick-guide/${subsection.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "-")}`
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
            <GuideCard.Text style={{ marginInlineStart: "16px" }}>
              {section.description}
            </GuideCard.Text>
            <GuideSubCard>
              {section.subsections?.map((subsection, subIndex) => (
                <GuideCardContent
                  key={subIndex}
                  onClick={() => handleSubsectionClick(subsection)}
                >
                  {subsection.icon ? (
                    <GlobalSmallImg src={getIcon(subsection.icon)} />
                  ) : (
                    <KeyboardHideOutlined
                      fontSize={ICON_SIZE.S}
                      style={{ color: "var(--blue-100)" }}
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
