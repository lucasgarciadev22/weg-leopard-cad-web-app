import { Card, CardBody } from "react-bootstrap";
import styled from "styled-components";

export const GuideCard = styled(Card)`
  background-color: var(--gray-300);
  display: flex;
  margin-top: 16px;
  border-radius: 8px;
`;

export const GuideSubCard = styled(Card)`
  display: "flex";
  flex-direction: row;
  flex-wrap: wrap;
  background-color: var(--gray-300);
  margin-top: 16px;
  border-radius: 8px;
  border-color: var(--gray-200);
  border-style: dotted;
`;

export const GuideCardContent = styled(CardBody)`
  background-color: var(--gray-200);
  max-width: 120px;
  min-width: 120px;
  min-height: 120px;
  max-height: 120px;
  padding: 8px;
  display: inline-flexbox;
  flex-wrap: wrap;
  border-radius: 8px;
  cursor: pointer;
`;
