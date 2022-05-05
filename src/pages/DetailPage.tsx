import { Page } from "@app/components/Page";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <Page>
        <h1>DetailPage: ${id}</h1>
      </Page>
    </Container>
  );
};

const Container = styled.div``;
