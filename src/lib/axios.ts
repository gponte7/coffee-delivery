import axios from 'axios'

export const api = axios.create({
  baseURL: window.location.protocol + '//' + window.location.hostname,
})
