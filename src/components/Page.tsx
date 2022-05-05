import { uiBreakpoints } from "@app/constants/ui";
import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

export const Page: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 1rem;
  margin: 5% auto;

  @media screen and (min-width: ${uiBreakpoints.md}) {
    max-width: 50%;
  }
`;
