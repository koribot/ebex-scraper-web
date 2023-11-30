import HomePageStore from "../data/homePage/store"

interface Store {
  HomePageStore: HomePageStore
}

export const store: Store = {
  HomePageStore: new HomePageStore()
}