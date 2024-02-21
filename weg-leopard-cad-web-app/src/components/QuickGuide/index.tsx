import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { fetchQuickGuideData } from "../../backend/axios/AxiosFuncs";
import {
  Subsection,
  SubsectionType,
  ToolSubsection,
  CommandListSubsection,
  Section,
} from "../../models/QuickGuide";
import { GuideAccordion, GuideCard } from "./styles";

const QuickGuide: React.FC = () => {
  const [guideData, setGuideData] = useState<Section[]>();

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

  const renderSubsection = (subsection: Subsection) => {
    switch (subsection.type) {
      case SubsectionType.TOOL_SUBSECTION:
        const toolSubsection = subsection as ToolSubsection;
        return (
          <>
            <h4>{toolSubsection.name}</h4>
            {toolSubsection.text && <p>{toolSubsection.text.concat("\n")}</p>}
            {toolSubsection.shortcuts && (
              <p>Shortcuts: {toolSubsection.shortcuts}</p>
            )}
            {toolSubsection.steps && (
              <ul>
                {toolSubsection.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            )}
          </>
        );
      case SubsectionType.COMMAND_LIST_SUBSECTION:
        const commandListSubsection = subsection as CommandListSubsection;
        return (
          <>
            <h4>{commandListSubsection.name}</h4>
            {commandListSubsection.text && (
              <p>{commandListSubsection.text.concat("\n")}</p>
            )}
            {commandListSubsection.commands && (
              <ul>
                {commandListSubsection.commands.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Quick Guide</h2>
      <GuideAccordion flush>
        {guideData?.map((section, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{section.header}</Accordion.Header>
            <Accordion.Body>
              <Accordion.Collapse eventKey={index.toString()}>
                <GuideCard>
                  <div>
                    <p>{section.description}</p>
                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex}>{renderSubsection(subsection)}</div>
                    ))}
                  </div>
                </GuideCard>
              </Accordion.Collapse>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </GuideAccordion>
    </div>
  );
};

export default QuickGuide;
