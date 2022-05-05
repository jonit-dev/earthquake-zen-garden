import { TestStore } from "./TestStore";

export class RootStore {
  public testStore: TestStore;

  constructor() {
    this.testStore = new TestStore(this);
  }
}

export const rootStore = new RootStore();

export const testStore = rootStore.testStore;
