import axios from 'axios';

const endpoint_keyword = "/api/extract/using_keyword";
const endpoint_html = "/api/extract";
const nextjs_endpoint_keyword = "/api/scrape/v1/keyword";
const nextjs_endpoint_html = "/api/scrape/v1/html";
const ENDPOINT_KEYWORD = 'endpoint_keyword';

const ScrapeService = {
 scrape: async (query: string, endpoint: string) => {
  const nextjsApiRoute =
   endpoint === ENDPOINT_KEYWORD ? nextjs_endpoint_keyword : nextjs_endpoint_html;
  try {
   const response = await axios.get(`http://localhost:3000${nextjsApiRoute}?q=${query}`);
   return response;
  } catch (error) {
   console.error('Error:', error);
   return { error: 'An error occurred' };
  }
 }
};

export default ScrapeService;
