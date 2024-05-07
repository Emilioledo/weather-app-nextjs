"use client";

import { createContext, useContext, useState } from "react";
import { WeatherData } from "@/service/types/weather.type";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [currentPlace, setCurrentPlace] = useState<WeatherData>();
  const [favWeatherList, setFavWeatherList] = useState<WeatherData[]>([]);
  return (
    <AppContext.Provider
      value={{
        currentPlace,
        setCurrentPlace,
        favWeatherList,
        setFavWeatherList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
