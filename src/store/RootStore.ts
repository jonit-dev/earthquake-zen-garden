import { EarthquakeDataStore } from "./EarthquakeDataStore";
import { UserStore } from "./UserStore";

export class RootStore {
  public earthquakeDataStore: EarthquakeDataStore;
  public userStore: UserStore;

  constructor() {
    this.earthquakeDataStore = new EarthquakeDataStore(this);
    this.userStore = new UserStore(this);
  }
}

export const rootStore = new RootStore();

export const earthquakeDataStore = rootStore.earthquakeDataStore;

export const userStore = rootStore.userStore;
