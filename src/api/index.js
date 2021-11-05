import fetch from 'isomorphic-fetch'
import { url } from '../util'

export const getSummary = async () => {
  const res = await fetch(url.summary)
  const resultSummary = await res.json()
  return resultSummary
}
