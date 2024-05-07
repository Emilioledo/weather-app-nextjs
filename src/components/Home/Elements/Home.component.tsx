"use client";
import { Container } from "@mui/material";
import { HomeForm } from "./HomeForm.component";

export const Home = () => {
  return (
    <Container
      sx={{
        padding: "16px",
      }}
      maxWidth="md"
    >
      <h2 style={{ textAlign: "center" }}>Weather App</h2>
      <HomeForm />
    </Container>
  );
};
