import FavoritesDataLayer from "@/components/Favorites/FavoritesDataLayer.server";
import { Suspense } from "react";

export default function Favorites() {
  return (
    <Suspense fallback={null}>
      <FavoritesDataLayer />;
    </Suspense>
  );
}
