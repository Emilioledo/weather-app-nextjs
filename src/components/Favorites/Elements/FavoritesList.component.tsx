"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseAppContext } from "@/context";
import { WeatherData } from "@/service/types/weather.type";
import CustomCard from "@/components/UI/Card/Card.component";
import { HomePlaceViewCardData } from "@/components/Home/Elements/HomePlaceViewCardData.component";

export const FavoritesList = () => {
  const router = useRouter();
  const { favWeatherList } = UseAppContext();
  const handleRedirect = (id: string) => {
    router.push(`/favorites/detail/${id}`);
  };

  return (
    <Container
      sx={{
        padding: "16px",
      }}
      maxWidth="md"
    >
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
        <Link href="/" style={{ textDecoration: "none" }}>
          Go to Home
        </Link>
      </Stack>
      {favWeatherList && (
        <Grid container spacing={2} justifyContent="center">
          {favWeatherList.map((element: WeatherData) => (
            <Grid item xs={12} sm={6} md={4} key={element.location.woeid}>
              <Stack
                onClick={() =>
                  handleRedirect(element.location.woeid.toString())
                }
                sx={{ cursor: "pointer" }}
              >
                <CustomCard
                  customSx={{
                    backgroundColor: "#F8F8F8",
                    width: 120,
                    height: 200,
                  }}
                >
                  <HomePlaceViewCardData
                    currentPlace={element}
                    isHomeCard={false}
                  />
                </CustomCard>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
