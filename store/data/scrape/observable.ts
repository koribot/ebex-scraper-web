import { scrape_default_observables } from "@/store/common/defaultObservables";
import { makeSimpleAutoObservable } from '../../../utils/make_simple_auto_observable';




export default class ScrapeObservable {

  scrape_observables = structuredClone(scrape_default_observables) // create deep copy(any changes wont affect scrape_default_observable object) of the strucure of observables

  constructor() {
    makeSimpleAutoObservable(this)
  }
}