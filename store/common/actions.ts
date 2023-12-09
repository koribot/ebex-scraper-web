import ScrapeStore from "../data/scrape/store"

interface Store {
  ScrapeStore: ScrapeStore
}

export const store: Store = {
  ScrapeStore: new ScrapeStore()
}