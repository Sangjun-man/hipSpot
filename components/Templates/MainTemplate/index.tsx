import React from "react";
import MapContainer from "../../../container/modules/MapContainer";
import InfoWindowContainer from "../../../container/Templates/InfoWindowTemplateContainer";
import * as S from "./style";
interface MainTemplateProps {}

const MainTemplate = ({}: MainTemplateProps) => {
  return (
    <S.MainTemplateLayout>
      <MapContainer />
      <InfoWindowContainer />
    </S.MainTemplateLayout>
  );
};

export default MainTemplate;
