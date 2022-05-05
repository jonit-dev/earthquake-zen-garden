import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/Navbar";
import { uiTypography } from "./constants/ui";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { earthquakeDataStore } from "./store/RootStore";

export const App: React.FC = () => {
  useEffect(() => {
    earthquakeDataStore.loadData();
  }, []);

  return (
    <GlobalStyles>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  font-family: ${uiTypography.fontFamily};

  .center {
    text-align: center;
  }
`;
