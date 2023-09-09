import axios, { AxiosResponse } from 'axios';
import { CountryDto } from '../model/countryList';
const baseURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10';
const headers = {
  'X-RapidAPI-Key': 'a81cd8bc22msh147fda62fbbce57p1f12c3jsn8bc78d4a0ed4',
  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
}

const axiosClient = axios.create();

const responseBody = (response: AxiosResponse) => response.data;
const requests = {
  get: (url: string) => axiosClient.get(url,{headers}).then(responseBody),
};
export const Country = {
  getCountryList: (): Promise<CountryDto> => requests.get(baseURL),
};