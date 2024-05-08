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
        prevState.filter(
          (element) => element.location.woeid !== currentPlace.location.woeid
        )
      );
      setIsFav(false);
    } else {
      setFavWeatherList((prevState: WeatherData[]) => [
        ...prevState,
        currentPlace,
      ]);
      setIsFav(true);
    }
  };

  const checkIsFav = () => {
    const isFavorite = favWeatherList?.find((element: WeatherData) => {
      return element.location.woeid == currentPlace.location.woeid;
    });
    setIsFav(!!isFavorite);
  };

  useEffect(() => {
    checkIsFav();
  }, [setFavWeatherList, currentPlace]);

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
