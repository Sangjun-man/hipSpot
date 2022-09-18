import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardLabel from ".";

export default {
  title: "Atoms / Card/ Label",
  component: CardLabel,
} as ComponentMeta<typeof CardLabel>;

const Template: ComponentStory<typeof CardLabel> = (args) => (
  <CardLabel {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  placeType: "팝업스토어/소품샵",
  distance: 68,
  placeName: "LCDC SEOUL",
  description: [
    `전세계 각국의 과자를 맛볼 수 있는`,
    `진귀한 물품들이 가득한 곳`,
  ],
};
