import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { GuideAccordion, GuideCard } from "./styles";
import ReactMarkdown from "react-markdown";
import { fetchQuickGuideData } from "../../../backend/axios/AxiosFuncs";
import {
  Section,
  Subsection,
  SubsectionType,
  ToolSubsection,
  CommandListSubsection,
} from "../../models/QuickGuide";

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
            {toolSubsection.text && (
              <ReactMarkdown>{toolSubsection.text.concat("\n")}</ReactMarkdown>
            )}
            {toolSubsection.shortcuts && (
              <ReactMarkdown>{`Shortcuts: ${toolSubsection.shortcuts}`}</ReactMarkdown>
            )}
            {toolSubsection.steps && (
              <ul>
                {toolSubsection.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>
                    <ReactMarkdown>{step}</ReactMarkdown>
                  </li>
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
              <ReactMarkdown>
                {commandListSubsection.text.concat("\n")}
              </ReactMarkdown>
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
    <>
      <h2>Quick Guide</h2>
      <GuideAccordion flush>
        {guideData?.map((section, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{section.header}</Accordion.Header>
            <Accordion.Body>
              <Accordion.Collapse eventKey={index.toString()}>
                <div>
                  <GuideCard>
                    <div>
                      <ReactMarkdown>{section.description}</ReactMarkdown>
                      {section.subsections?.map((subsection, subIndex) => (
                        <div key={subIndex}>{renderSubsection(subsection)}</div>
                      ))}
                    </div>
                  </GuideCard>
                </div>
              </Accordion.Collapse>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </GuideAccordion>
    </>
  );
};

export default QuickGuide;
