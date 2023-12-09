
import { IScrapeResponse } from './../../types/scrape';



export const scrape_default_observables: IScrapeResponse = {
 isScrapingLoading: false,
 ebayURL: '',
 ebaySearchKeyword: '',
 listings: [{
  image_url: '',
  index: 0,
  link: '',
  price: '',
  title: ''
 }],
 keywords_counter: [{
  Counter: 0,
  Word: ''
 }],
 prices_counter: [{
  Counter: 0,
  Price: ''
 }],
 average_price: '',
 highest_price: '',
 keyword_used_for_searching: '',
 lowest_price: '',
 middle_price: '',
 exact_url: ''
};


