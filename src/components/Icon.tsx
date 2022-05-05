import { uiColors } from "@app/constants/ui";
import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  color?: string;
}

export const Icon: React.FC<IProps> = ({ name, color }) => {
  return (
    <CustomIcon className={name} color={color || uiColors.gray}></CustomIcon>
  );
};

interface IIconProps {
  color: string;
}

const CustomIcon = styled.i<IIconProps>`
  color: ${(props) => props.color};
  margin-left: 0.25rem;
  font-size: 0.85rem;
`;
