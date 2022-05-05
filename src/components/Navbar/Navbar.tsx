import { uiColors } from "@app/constants/ui";
import { Center } from "@app/constants/uiStructure";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  return (
    <NavBar role="navigation" aria-label="main navigation">
      <NavBarStart>
        <Center>
          <Link to="/" className="navbar-item">
            <Logo src="/images/logo.svg" alt="App logo" />
          </Link>
        </Center>
      </NavBarStart>

      <NavBarMiddle></NavBarMiddle>

      <NavBarEnd>
        <Link to="/profile/sally">
          <strong>Welcome Sally</strong>
        </Link>
      </NavBarEnd>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: ${uiColors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 3.5rem;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;

  * {
    border: 1px solid #f00 !important;
    box-sizing: border-box;
  }
  padding-left: 1rem;
  padding-right: 1rem;
`;

const NavBarStart = styled.div`
  flex: 10% 0 0;
`;

const NavBarMiddle = styled.div`
  flex: auto;
`;

const NavBarEnd = styled.div`
  flex: 30% 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img``;
