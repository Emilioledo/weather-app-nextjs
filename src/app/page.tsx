import HomeDataLayer from "@/components/Home/HomeDataLayer.server";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeDataLayer />;
    </Suspense>
  );
}
