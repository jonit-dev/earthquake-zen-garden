/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export interface IDropdownOption {
  label: string;
  id?: string;
  key?: string;
  value?: string | number;
}

interface IProps {
  children: React.ReactNode;
  options: IDropdownOption[];
  onOptionClick: (option: IDropdownOption) => void;
}

export const Dropdown: React.FC<IProps> = ({
  children,
  options,
  onOptionClick,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onRenderOptions = () =>
    options?.map((option, i) => (
      <a
        key={`${option.label}_${i}`}
        href="#"
        className="dropdown-item"
        onClick={() => {
          onOptionClick(option);
          setIsActive(false);
        }}
      >
        {option.label}
      </a>
    ));

  return (
    <div className={`dropdown ${isActive ? "is-active" : ""}`}>
      <div className="dropdown-trigger" onClick={() => setIsActive(!isActive)}>
        {children}
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">{onRenderOptions()}</div>
      </div>
    </div>
  );
};
