export interface IScrapeRequest {
 ebayURL?: string,
 ebaySearchKeyword?: string;
}


export interface IListing {
 image_url: string,
 index: number,
 link: string,
 price: string,
 title: string
}

export interface IKeywordCounter {
 Counter: number,
 Word: string
}

export interface IPricesCounter {
 Counter: number,
 Price: string
}


export interface IScrapeResponse {
 isScrapingLoading?: boolean,
 ebayURL?: string,
 ebaySearchKeyword?: string;
 listings: IListing[],
 keywords_counter: IKeywordCounter[],
 prices_counter: IPricesCounter[],
 average_price: string,
 highest_price: string,
 keyword_used_for_searching: string,
 lowest_price: string,
 middle_price: string
 exact_url: string
}