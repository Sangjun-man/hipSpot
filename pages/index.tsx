import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import MainContainer from "../container/Templates/MainTemplateContainer";

const Main: NextPage = () => {
  return (
    <MainLayout>
      <MainContainer />
    </MainLayout>
  );
};

export default Main;
