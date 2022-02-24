import type { NextPage } from "next";
import { useEffect } from "react";
import { MainLayout } from "../components/Templates/MainLayout";
import { MapLayout } from "../components/Templates/MapLayout";

const Main: NextPage = () => {
  useEffect(() => {
    console.log(process.env);
  });

  return (
    <MainLayout>
      <MapLayout></MapLayout>
    </MainLayout>
  );
};

export default Main;
