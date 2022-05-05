import { Page } from "@app/components/Page";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <Page>
        <h1>Profile: ${id}</h1>
      </Page>
    </Container>
  );
};

const Container = styled.div``;
