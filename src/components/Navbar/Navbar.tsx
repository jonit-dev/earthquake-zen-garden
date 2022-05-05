import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {}

export const Navbar: React.FC<IProps> = (props) => {
  return (
    <NavBar
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <Logo src="/images/logo.png" alt="Invoicr logo" />
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 4rem;
  margin-left: 1rem;
`;
