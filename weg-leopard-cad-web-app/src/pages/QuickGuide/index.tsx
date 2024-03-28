import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import { Section, Subsection } from "../../models/QuickGuide";
import { GuideCard, GuideCardContent, GuideSubCard } from "./styles";
import { getIcon } from "../../backend/services/IconService";
import { GlobalSmallImg, ICON_SIZE } from "../../styles/GlobalStyles";
import { KeyboardHideOutlined } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";

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

  const markdownContent = `This guide was created with the aim of providing basic instructions for beginners on how to use the application. It covers general topics such as initializing a new document (or loading an existing one) and how to use the main manipulation and drawing tools available in **Leopard** up to the release of the current *BETA* version. Additionally, it includes a document listing the commands available in Leopard's Command Line up to the time of writing this guide.
  `;

  return (
    <>
      <h1>Quick Guide</h1>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <br />
      {guideData?.map((section, index) => (
        <GuideCard key={index}>
          <GuideCard.Body>
            <GuideCard.Title>
              <h2>{section.header}</h2>
            </GuideCard.Title>
            <GuideCard.Text style={{ marginInlineStart: "16px" }}>
              <ReactMarkdown>{section.description}</ReactMarkdown>
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
