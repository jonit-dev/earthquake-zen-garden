import { uiBreakpoints, uiColors } from "@app/constants/ui";
import { userStore } from "@app/store/RootStore";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar: React.FC = observer(() => {
  const { user } = userStore;

  return (
    <NavBar role="navigation" aria-label="main navigation">
      <NavBarStart>
        <Link to="/" className="navbar-item">
          <Logo src="/images/logo.svg" alt="App logo" />
        </Link>
      </NavBarStart>

      <NavBarMiddle>
        <Title>Earthquake Zen Garden</Title>
      </NavBarMiddle>

      <NavBarEnd>
        <Link to={`/profile`}>
          <strong>Welcome, {user?.firstName}</strong>
        </Link>
      </NavBarEnd>
    </NavBar>
  );
});

const Title = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${uiColors.dark};
  text-align: center;
  width: 100%;

  @media screen and (min-width: ${uiBreakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const NavBar = styled.nav`
  background-color: ${uiColors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 3.5rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;

  @media screen and (min-width: ${uiBreakpoints.md}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NavBarStart = styled.div`
  flex: 25%;
  display: flex;
  align-items: center;

  justify-content: flex-start;

  @media screen and (max-width: ${uiBreakpoints.md}) {
    justify-content: center;
  }
`;

const NavBarMiddle = styled.div`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarEnd = styled.div`
  flex: 25%;

  color: ${uiColors.dark};
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${uiBreakpoints.md}) {
    justify-content: center;
    font-size: 0.8rem;
  }
`;

const Logo = styled.img``;
