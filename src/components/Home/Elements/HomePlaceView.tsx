"use client";
import { useEffect, useState } from "react";
import { UseAppContext } from "@/context";
import CustomCard from "@/components/UI/Card/Card.component";
import { WeatherData } from "@/service/types/weather.type";
import { HomePlaceViewCardData } from "./HomePlaceViewCardData.component";

export const HomePlaceView = () => {
  const [isFav, setIsFav] = useState(false);
  const { currentPlace, favWeatherList, setFavWeatherList } = UseAppContext();

  const handleFav = () => {
    if (isFav) {
      setFavWeatherList((prevState: WeatherData[]) =>
        prevState.filter((element) => element !== currentPlace)
      );
    } else {
      setFavWeatherList((prevState: WeatherData[]) => [
        ...prevState,
        currentPlace,
      ]);
    }
  };

  useEffect(() => {
    console.log("currentPlace", currentPlace);
  }, [currentPlace]);

  const checkIsFav = () => {
    const isFav = favWeatherList?.includes(currentPlace);
    console.log("isFav", isFav);
    setIsFav(isFav);
  };

  useEffect(() => {
    checkIsFav();
  }, [favWeatherList, currentPlace]);

  return (
    <>
      {currentPlace && (
        <CustomCard customSx={{ backgroundColor: "#F8F8F8" }}>
          <HomePlaceViewCardData
            currentPlace={currentPlace}
            isHomeCard
            isFav={isFav}
            handleFav={handleFav}
          />
        </CustomCard>
      )}
    </>
  );
};
