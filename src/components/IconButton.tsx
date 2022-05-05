import React from "react";
import styled from "styled-components";

interface IProps {
  iconName: string;
}

export const IconButton: React.FC<IProps> = ({ iconName }) => {
  return (
    <Container>
      <button className="button">
        <span className="icon">
          <i className={`fas ${iconName}`}></i>
        </span>
      </button>
    </Container>
  );
};

const Container = styled.div``;
