import { earthquakeDataStore } from "@app/store/RootStore";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { EarthquakeDataTable } from "../Earthquake/EarthquakeDataTable";
import { EQDataMock } from "../mock/EQDataMock";

describe("<EarthquakeDataTable/>", () => {
  earthquakeDataStore.setData(EQDataMock);

  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <EarthquakeDataTable />
    </Router>
  );

  it("should properly load Earthquake information", async () => {
    const EQItem = await screen.getAllByTestId("EQ-data-item");

    expect(EQItem.length > 0).toBeTruthy();
  });
});
