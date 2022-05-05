import { Page } from "@app/components/Page";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {}

export const HomePage: React.FC<IProps> = (props) => {
  return (
    <Page>
      <h1>USGS All Earthquakes, Past Hour</h1>

      <strong>Visit my </strong>
      <Link to="/profile/sally">profile</Link>
    </Page>
  );
};
