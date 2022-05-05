import { EQDataMock } from "@app/components/mock/EQDataMock";
import { MemoryRouterWrapper, renderWithRouter } from "@app/libs/TestsHelpers";
import { earthquakeDataStore } from "@app/store/RootStore";
import { screen } from "@testing-library/react";
import { DetailPage } from "../DetailPage";

describe("<DetailPage/>", () => {
  earthquakeDataStore.setData(EQDataMock);

  renderWithRouter(
    <MemoryRouterWrapper
      initialEntries={["/details/nc72999021"]}
      path="/details/:id"
    >
      <DetailPage />
    </MemoryRouterWrapper>
  );

  it("Should properly load detailed view Earthquake information", () => {
    expect(
      screen.getAllByText(/M 1.2 - 3km ENE of The Geysers, CA/i)
    ).toBeTruthy();
    expect(screen.getByText(/1.19/i)).toBeTruthy();
    expect(screen.getByText(/Apr 13, 2018/i)).toBeTruthy();
  });
});
