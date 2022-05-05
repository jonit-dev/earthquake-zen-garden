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
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div``;
