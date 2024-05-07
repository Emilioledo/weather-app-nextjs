import { InternalError } from "@/lib/exception";
import { getWeatherByCityName } from "@/service/api.service";

export async function getWeatherByCityNameAction(name: string) {
  try {
    const res = await getWeatherByCityName(name);
    return res;
  } catch (e) {
    throw new InternalError();
  }
}
