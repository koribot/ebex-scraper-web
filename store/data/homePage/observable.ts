import { makeObservable } from "mobx";
import { makeSimpleAutoObservable } from './../../../utils/make_simple_auto_observable';


export default class HomePageObservable {

  ebayURL: string = ''
  ebaySearchKeyword: string = ''


  constructor() {
    makeSimpleAutoObservable(this)
  }
}