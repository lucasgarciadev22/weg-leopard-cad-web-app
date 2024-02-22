import { Card, CardBody } from "react-bootstrap";
import styled from "styled-components";

export const GuideCard = styled(Card)`
  background-color: var(--gray-300);
  margin-top: 16px;
  border-radius: 8px;
  min-width: fit-content;
`;

export const GuideSubCard = styled(Card)`
  display: "flex";
  flex-direction: row;
  flex-wrap: "wrap";
  min-width: fit-content;
  background-color: var(--gray-300);
  margin-top: 16px;
  border-radius: 8px;
  border-color: var(--gray-200);
  border-style: dotted;
`;

export const GuideCardContent = styled(CardBody)`
  background-color: var(--gray-200);
  max-width: fit-content;
  display: inline-flexbox;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;
