import CustomCard from "@/components/UI/Card/Card.component";
import { WeatherData } from "@/service/types/weather.type";
import { Stack, Typography } from "@mui/material";

interface Props {
  currentFavPlace: WeatherData;
}

export const Forecasts: React.FC<Props> = ({ currentFavPlace }) => {
  return (
    <Stack>
      <Typography
        variant="body1"
        sx={{ paddingBottom: 2, paddingTop: 2, textAlign: "center" }}
      >
        Extended Forecast
      </Typography>
      {currentFavPlace &&
        currentFavPlace.forecasts.slice(0, 5).map((forecast, index) => (
          <CustomCard
            key={index}
            customSx={{ padding: 1, backgroundColor: "#F8F8F8", margin: 1 }}
          >
            <Stack sx={{ textAlign: "center" }}>
              <Typography variant="h6">Day: {forecast.day}</Typography>
              <Typography variant="body1">
                High temperature: {forecast.high}
              </Typography>
              <Typography variant="body1">
                Low temperature: {forecast.low}
              </Typography>
              <Typography variant="body1">
                Description: {forecast.text}
              </Typography>
            </Stack>
          </CustomCard>
        ))}
      {!currentFavPlace && (
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          No content available
        </Typography>
      )}
    </Stack>
  );
};
