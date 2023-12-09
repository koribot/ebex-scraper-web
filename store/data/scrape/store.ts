import ScrapeObservable from "./observable";
import { runInAction } from "mobx";
import ScrapeService from '@/services/scrape_service';
import { resetObservables } from "@/utils/resetObservables";


export default class ScrapeStore extends ScrapeObservable {

  resetStore = () => {
    runInAction(() => {
      resetObservables(this)
    })
  }

  performScrape = async (values: string = 'shoes', endpoint: string = 'endpoint_keyword') => {
    runInAction(() => {
      this.scrape_observables.isScrapingLoading = true
    })
    try {
      const response = await ScrapeService.scrape(values, endpoint)
      runInAction(() => {
        if (response) {
          if ('data' in response) {
            this.scrape_observables.isScrapingLoading = false
            // console.log(response.data[0])
            this.scrape_observables.listings = response.data[0].listings
            this.scrape_observables.keywords_counter = response.data[0].analysis_result.other_word_counts
            this.scrape_observables.prices_counter = response.data[0].analysis_result.prices_counter
            this.scrape_observables.exact_url = response.data[0].exact_url
            this.scrape_observables.highest_price = response.data[0].analysis_result.highest_price
            this.scrape_observables.average_price = response.data[0].analysis_result.average_price
            this.scrape_observables.lowest_price = response.data[0].analysis_result.lowest_price
            this.scrape_observables.middle_price = response.data[0].analysis_result.middle_price

            // this.scrape_observables.keyword_used_for_searching
            // console.log(this.scrape_observables.listings.map((item) => item))
          }
        }
      })
    } catch (error) {

    }
  }

  setEbaySearchKeywords = (searchKeyword: string) => {
    runInAction(() => {
      this.scrape_observables.ebaySearchKeyword = searchKeyword
    })
  }
  setEbayURL = (ebayURL: string) => {
    runInAction(() => {
      this.scrape_observables.ebayURL = ebayURL
    })
  }

}