// this is unused for now, will thank later if we need to refactor codes here

import axios from 'axios'

const endpoint = "https://ebextractor-v1.vercel.app/api/extract/using_keyword"


export default async function _fetch(query: string) {

 const request_url = `${endpoint}?q=${query}`
 try {
  const response = await axios.get(request_url)
  return response
 } catch (error) {
  console.log('Server error', error)
  return { error: 'An error occured' }
 }
}