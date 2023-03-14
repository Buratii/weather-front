import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json?key=7c6d675573a64633a86235836230803&aqi=no',
})

export default api;