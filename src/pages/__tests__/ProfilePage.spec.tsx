import { MemoryRouterWrapper, renderWithRouter } from "@app/libs/TestsHelpers";
import { userStore } from "@app/store/RootStore";
import { screen } from "@testing-library/react";
import { ProfilePage } from "../ProfilePage";

describe("<ProfilePage/>", () => {
  userStore.loadProfile();

  renderWithRouter(
    <MemoryRouterWrapper initialEntries={["/profile"]} path="/profile">
      <ProfilePage />
    </MemoryRouterWrapper>
  );

  it("Should properly load profile data", () => {
    expect(screen.getAllByText(/Sally/i)).toBeTruthy();
    expect(screen.getByText(/Wang/i)).toBeTruthy();
    expect(screen.getByText(/01-343-989-2345/i)).toBeTruthy();
    expect(screen.getByText(/sw@nowhere.ic.kp/i)).toBeTruthy();
    expect(screen.getByText(/Lorem ipsum /i)).toBeTruthy();
  });
});
