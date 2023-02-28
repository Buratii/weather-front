import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/current.json?key=4939c1477c2048b99fb152700232302&aqi=no'
})

export default api;