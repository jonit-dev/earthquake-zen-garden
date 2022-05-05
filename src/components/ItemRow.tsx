import React from "react";
import styled from "styled-components";

interface IProps {
  label: string;
  value: string;
}

export const ItemRow: React.FC<IProps> = ({ label, value }) => {
  return (
    <Container>
      <div className="columns">
        <div className="column">
          <strong>{label}</strong>
        </div>
        <div className="column is-four-fifths">{value}</div>
      </div>
    </Container>
  );
};

const Container = styled.div``;
