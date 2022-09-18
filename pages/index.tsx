import type { NextPage } from "next";
import { useEffect } from "react";
import { MainLayout } from "../components/layouts";
import InfoWindowContainer from "../container/Templates/InfoWindowTemplateContainer";
import MainContainer from "../container/Templates/MainTemplateContainer";

const Main: NextPage = () => {
  useEffect(() => {});

  return (
    <MainLayout>
      <MainContainer />
    </MainLayout>
  );
};

export default Main;
