"use client";
import Link from "next/link";
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
      <Stack alignItems="center" sx={{ paddingBottom: 4 }}>
        <Typography variant="h5" sx={{ paddingBottom: 2 }}>
          Weather App
        </Typography>
        <Link href="/favorites" style={{ textDecoration: "none" }}>
          Go to Favorites
        </Link>
      </Stack>

      <Stack sx={{ paddingBottom: 4 }}>
        <HomeForm />
      </Stack>

      <Stack sx={{ paddingBottom: 4 }}>
        <HomePlaceView />
      </Stack>
    </Container>
  );
};
