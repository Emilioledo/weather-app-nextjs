import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CustomCard({
  minWidth,
  children,
  customSx,
}: {
  children: React.ReactNode;
  minWidth?: number;
  customSx?: React.CSSProperties;
}) {
  return (
    <Card sx={{ minWidth: minWidth || 275, ...customSx }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
