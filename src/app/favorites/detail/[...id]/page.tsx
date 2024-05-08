import FavoritesDetailDataLayer from "@/components/Favorites/Detail/FavoritesDetailDataLayer.server";
import { Suspense } from "react";

export default function Favorites() {
  return (
    <Suspense fallback={null}>
      <FavoritesDetailDataLayer />;
    </Suspense>
  );
}
