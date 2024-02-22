import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

export const GuideAccordion = styled(Accordion)`
  background-color: var(--background-color);
  border: 1px solid var(--yellow-300);
`;

export const GuideCard = styled(Card)`
  background-color: var(--gray-100);
  border: 1px solid var(--yellow-300);
  margin-top: 16px;
  border-radius: 8px;
`;
