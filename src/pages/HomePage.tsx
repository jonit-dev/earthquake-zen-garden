import { EarthquakeDataTable } from "@app/components/Earthquake/EarthquakeDataTable";
import { Page } from "@app/components/Page";
import React from "react";

interface IProps {}

export const HomePage: React.FC<IProps> = (props) => {
  return (
    <Page>
      <h1 className="title center">USGS All Earthquakes, Past Hour</h1>

      <EarthquakeDataTable />
    </Page>
  );
};
