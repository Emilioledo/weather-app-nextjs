import { fetchGet } from "./fetchInstance";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getWeatherByCityName = async (location: string, u?: string) => {
  return await fetchGet(`${BASE_URL}`, { location, u });
};
