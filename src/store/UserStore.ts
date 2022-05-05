import EQData from "@app/data/data.json";
import { IUser } from "@app/types/UserTypes";
import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class UserStore {
  public user: IUser | null = null;

  constructor(public root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  public loadProfile() {
    this.user = EQData.profile;
  }
}
