import { EarthquakeDataStore } from "./EarthquakeDataStore";

export class RootStore {
  public earthquakeDataStore: EarthquakeDataStore;

  constructor() {
    this.earthquakeDataStore = new EarthquakeDataStore(this);
  }
}

export const rootStore = new RootStore();

export const earthquakeDataStore = rootStore.earthquakeDataStore;
