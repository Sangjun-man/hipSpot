import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceCard from ".";

export default {
  title: " Modules / PlaceCard",
  component: PlaceCard,
} as ComponentMeta<typeof PlaceCard>;

const Template: ComponentStory<typeof PlaceCard> = (args) => (
  <PlaceCard {...args} />
);

export const largerImg = Template.bind({});

largerImg.args = {
  src: "/image/testImg2.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: [
    "태릉입구와 먹골역 화랑대역 사이에 있는",
    "우리집에 놀러오세요",
  ],
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
