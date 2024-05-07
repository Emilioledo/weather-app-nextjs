"use client";
import { useEffect, useState } from "react";
import { UseAppContext } from "@/context";
import { Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CustomCard from "@/components/UI/Card/Card.component";
import { WeatherData } from "@/service/types/weather.type";

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

  const checkIsFav = () => {
    const isFav = favWeatherList?.includes(currentPlace);
    setIsFav(isFav);
  };

  useEffect(() => {
    checkIsFav();
  }, [favWeatherList]);

  return (
    <>
      {currentPlace && (
        <CustomCard>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {currentPlace.location.city}, {currentPlace.location.country}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Temperature:{" "}
                {currentPlace.current_observation?.condition.temperature}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Description: {currentPlace.current_observation?.condition.text}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Humidity:{" "}
                {currentPlace.current_observation?.atmosphere.humidity}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Speed wind: {currentPlace.current_observation?.wind.speed}
              </Typography>
            </Stack>
            <Stack onClick={handleFav}>
              <FavoriteBorderIcon
                sx={{
                  color: isFav ? "red" : "grey",
                  cursor: "pointer",
                }}
              />{" "}
            </Stack>
          </Stack>
        </CustomCard>
      )}
    </>
  );
};
