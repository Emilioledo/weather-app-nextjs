"use client";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { InputButton } from "@/components/UI/Input/InputButton.component";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Something went wrong!</h2>
      <InputButton
        text="Try again"
        onClick={() => reset()}
        sx={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      />
    </Stack>
  );
}
