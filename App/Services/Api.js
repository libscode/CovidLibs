// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://indonesia-covid-19.mathdro.id/api') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getSummary = () => api.get(``)
  const getProvinsi = () => api.get(`/provinsi`)
  const getDaily = () => api.get(`/harian`)

  return {
    getSummary,
    getProvinsi,
    getDaily,

    api
  }
}

// let's return back our create method as the default.
export default {
  create
}
