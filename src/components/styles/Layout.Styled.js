import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerStyleds = styled(Container)
    `
    width: 100%;
    height: 100%;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center
`;

export const RowStyled = styled(Row)
    `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ColStyled = styled(Col)
    `
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    justify-content: end;
    align-items: center;
  }
`;