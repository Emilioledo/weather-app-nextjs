import { InternalError } from "@/lib/exception";
import { getWeatherByCityName } from "@/service/api.service";

export async function getWeatherByCityNameAction(name: string, u?: string) {
  try {
    const res = await getWeatherByCityName(name, u);
    return res;
  } catch (e) {
    throw new InternalError();
  }
}
