import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class TestStore {
  constructor(public root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }
}
