import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoCard from ".";

export default {
  title: " Modules / PlaceInfoCard",
  component: PlaceInfoCard,
} as ComponentMeta<typeof PlaceInfoCard>;

const Template: ComponentStory<typeof PlaceInfoCard> = (args) => (
  <PlaceInfoCard {...args} />
);

export const largerImg = Template.bind({});

largerImg.args = {
  src: "/image/testImg2.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: ["태릉입구와 먹골역 화랑대역 사이에 있는", "서울 묵동 77-31"],
};

export const smallerImg = Template.bind({});
smallerImg.args = {
  src: "/image/testImg.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: ["태릉입구와 먹골역 화랑대역 사이에 있는", "서울 묵동 77-31"],
};
