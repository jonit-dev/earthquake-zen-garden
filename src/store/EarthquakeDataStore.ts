import EQData from "@app/data/data.json";
import { EQSortTypes, IEarthquakeData } from "@app/types/EarthquakeDataTypes";
import _ from "lodash";
import { makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";

export class EarthquakeDataStore {
  public data: IEarthquakeData | null = null;

  constructor(public root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  public loadData() {
    this.setData(EQData.data);
  }

  public setData(data: IEarthquakeData) {
    this.data = data;
  }

  public sortDate(attr: string, type: EQSortTypes) {
    console.log(`sorting by ${attr} - ${type}`);
    const sortedData = _.orderBy(
      this.data?.features,
      [`properties.${attr}`],
      [type]
    );

    console.log(toJS(sortedData[0]));

    if (this.data) {
      this.data.features = sortedData;
    }
  }
}
