import { testHelper } from "@app/libs/TestHelper";
import React, { useEffect } from "react";
import styled from "styled-components";

interface IProps {}

export const App: React.FC<IProps> = (props) => {
  useEffect(() => {
    testHelper.sayHello();
  }, []);

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
};

const Container = styled.div``;
