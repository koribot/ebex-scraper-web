import HomePageObservable from "./observable";
import { runInAction } from "mobx";


export default class HomePageStore extends HomePageObservable {

  setEbaySearchKeywords = (searchKeyword: string) => {
    runInAction(() => {
      this.ebaySearchKeyword = searchKeyword
    })
  }
  setEbayURL = (ebayURL: string) => {
    runInAction(() => {
      this.ebayURL = ebayURL
    })
  }

}