import { Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WeatherData } from "@/service/types/weather.type";

interface Props {
  currentPlace: WeatherData;
  isHomeCard: boolean;
  isFav?: boolean;
  handleFav?: () => void;
}

export const HomePlaceViewCardData: React.FC<Props> = ({
  currentPlace,
  isHomeCard,
  isFav,
  handleFav,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Stack>
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
        >
          {currentPlace.location.city}, {currentPlace.location.country}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperature: {currentPlace.current_observation?.condition.temperature}
          °
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Description: {currentPlace.current_observation?.condition.text}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Humidity: {currentPlace.current_observation?.atmosphere.humidity}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Speed wind: {currentPlace.current_observation?.wind.speed}
        </Typography>
      </Stack>
      {isHomeCard && (
        <Stack onClick={handleFav}>
          <FavoriteBorderIcon
            sx={{
              color: isFav ? "red" : "grey",
              cursor: "pointer",
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};
