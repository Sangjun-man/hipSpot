import type { NextPage } from "next";
import { useEffect } from "react";
import Button from "../components/atoms/Button";
import { MainLayout } from "../components/Templates/MainLayout";
import { MapLayout } from "../components/Templates/MapLayout";

const Main: NextPage = () => {
  useEffect(() => {
    console.log(process.env);
  });

  return (
    <div>
      <Button>dfasdf</Button>
    </div>
  );
};

export default Main;
