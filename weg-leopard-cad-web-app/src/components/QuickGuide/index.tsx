import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import { Section, Subsection } from "../../models/QuickGuide";
import { GuideCard } from "./styles";

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
        <GuideCard
          key={index}
          style={{ marginBottom: "20px", backgroundColor: "var(--gray-100)" }}
        >
          <GuideCard.Body>
            <GuideCard.Title>
              <h3>{section.header}</h3>
            </GuideCard.Title>
            <GuideCard.Text>{section.description}</GuideCard.Text>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {section.subsections?.map((subsection, subIndex) => (
                <div
                  key={subIndex}
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubsectionClick(subsection)}
                >
                  <h6>{subsection.name}</h6>
                </div>
              ))}
            </div>
          </GuideCard.Body>
        </GuideCard>
      ))}
    </>
  );
};

export default QuickGuide;
