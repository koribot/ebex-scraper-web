import { NextResponse } from 'next/server';
import axios from 'axios'


const endpoint_vercel = "https://ebextractor-v1.vercel.app/api/extract/using_keyword"


const get_html_content = async (query: string) => {
  const response = await axios.get(`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${query}&_sacat=0&_ipg=240&_pgn=1`)
  if ('data' in response)
    return response.data
}


export async function GET(
  req: any,
  res: any
) {
  console.log(req.url)
  const query = req.nextUrl.searchParams.get('q')
  // const request_url = `${endpoint_vercel}?q=${query}`
  try {
    // const response = await axios.get(request_url)
    const html_content = await get_html_content(query)
    if (html_content) {
      const reponse = await axios.post("https://wcawasa.pythonanywhere.com/api/extract", {
        "htmlContent": `${html_content}`,
        "url": `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=${query}&_sacat=0`
      })

      if ('data' in reponse) {
        return NextResponse.json([reponse.data]);
      }
    }
  } catch (error) {
    console.log('Server Error', error)
    return NextResponse.json({ error: error })
  }
}
