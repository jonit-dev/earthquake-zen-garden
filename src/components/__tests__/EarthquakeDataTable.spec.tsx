import { render, screen } from "@testing-library/react";
import { EarthquakeDataTable } from "../Earthquake/EarthquakeDataTable";

describe("<EarthquakeDataTable/>", () => {
  render(<EarthquakeDataTable />);

  it("should properly load Earthquake information", () => {
    const EQItem = screen.getByTestId("EQ-data-item");

    expect(EQItem).toBeInTheDocument();
  });
});
