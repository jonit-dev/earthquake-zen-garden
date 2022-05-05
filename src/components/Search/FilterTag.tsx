import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  onDelete: () => void;
}

export const FilterTag: React.FC<IProps> = ({ children, onDelete }) => {
  return (
    <Tag className="tag is-link">
      {children}
      <button className="delete is-small" onClick={onDelete}></button>
    </Tag>
  );
};

const Tag = styled.span`
  margin-right: 0.5rem;
`;
