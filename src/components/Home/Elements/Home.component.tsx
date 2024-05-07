"use client";
import { Container, Stack, Typography } from "@mui/material";
import { HomeForm } from "./HomeForm.component";
import { HomePlaceView } from "./HomePlaceView";

export const Home = () => {
  return (
    <Container
      sx={{
        padding: "16px",
      }}
      maxWidth="md"
    >
      <Typography variant="h5" sx={{ textAlign: "center", paddingBottom: 4 }}>
        Weather App
      </Typography>
      <Stack sx={{ paddingBottom: 4 }}>
        <HomeForm />
      </Stack>
      <Stack sx={{ paddingBottom: 4 }}>
        <HomePlaceView />
      </Stack>
    </Container>
  );
};
