import type { NextPage } from "next";
import { useEffect } from "react";
import { MapLayout } from "../components/layouts/MapLayout";
import Map from "../components/Map";

const Main: NextPage = () => {
  useEffect(() => {
    console.log(process.env);
  });

  return (
    <MapLayout>
      <Map />
    </MapLayout>
  );
};

export default Main;
