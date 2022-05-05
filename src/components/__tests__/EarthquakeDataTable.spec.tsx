import { earthquakeDataStore } from "@app/store/RootStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { EarthquakeDataTable } from "../Earthquake/EarthquakeDataTable";
import { EQDataMock } from "../mock/EQDataMock";

describe("<EarthquakeDataTable/>", () => {
  earthquakeDataStore.setData(EQDataMock);

  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <EarthquakeDataTable />
      </Router>
    );
  });

  it("should properly load Earthquake information", () => {
    const EQItem = screen.getAllByTestId("EQ-data-item");

    expect(EQItem.length > 0).toBeTruthy();
  });

  it("should sort by title, when clicking on Title th (toggle behaviour)", () => {
    const titleTH = screen.getByTestId("EQ-data-title-th");

    fireEvent.click(titleTH);

    const titleData = earthquakeDataStore.data?.features[0].properties.title;

    expect(titleData === "M 0.5 - 11km NE of Aguanga, CA").toBeTruthy();

    fireEvent.click(titleTH);

    const updatedTitleData =
      earthquakeDataStore.data?.features[0].properties.title;

    expect(
      updatedTitleData === "M 1.2 - 3km ENE of The Geysers, CA"
    ).toBeTruthy();
  });
});
