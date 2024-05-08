"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { UseAppContext } from "@/context";
import { WeatherData } from "@/service/types/weather.type";
import CustomCard from "@/components/UI/Card/Card.component";
import { HomePlaceViewCardData } from "@/components/Home/Elements/HomePlaceViewCardData.component";
import { Forecasts } from "./Forecasts.component";

export const FavoritesDetail = () => {
  const params = useParams<{ id: string }>();
  const [currentFavPlace, setCurrentFavPlace] = useState<WeatherData>();
  const [loading, setLoading] = useState<Boolean>(false);
  const { id } = params;
  const { favWeatherList } = UseAppContext();

  const searchPlaceById = () => {
    setLoading(true);
    const paramId = Number(id[0]);

    const result: WeatherData = favWeatherList.find((element: WeatherData) => {
      return element.location.woeid === paramId;
    });

    if (result) {
      setCurrentFavPlace(result);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchPlaceById();
  });

  return (
    <Container
      sx={{
        padding: "16px",
      }}
      maxWidth="md"
    >
      {loading && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Stack>
      )}
      {currentFavPlace && (
        <>
          <Stack alignItems="center" sx={{ paddingBottom: 4 }}>
            <Typography
              variant="h5"
              sx={{
                paddingBottom: 2,
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
              }}
            >
              Awesome Weather App
            </Typography>
            <Link href="/favorites" style={{ textDecoration: "none" }}>
              Go Back
            </Link>
          </Stack>
          <CustomCard
            customSx={{
              backgroundColor: "#F8F8F8",
              width: "100%",
              height: "100%",
            }}
          >
            <HomePlaceViewCardData
              currentPlace={currentFavPlace}
              isHomeCard={false}
            />
          </CustomCard>
          <Forecasts currentFavPlace={currentFavPlace} />
        </>
      )}
    </Container>
  );
};
