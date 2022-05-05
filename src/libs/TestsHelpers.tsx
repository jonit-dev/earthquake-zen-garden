import { render } from "@testing-library/react";
import React, { JSXElementConstructor, ReactElement } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  initialEntries: string[];
  path: string;
}

export const MemoryRouterWrapper: React.FC<IProps> = ({
  children,
  initialEntries,
  path,
}) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={path} element={children} />
      </Routes>
    </MemoryRouter>
  );
};

export const renderWithRouter = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>
) => {
  return {
    ...render(ui),
  };
};
