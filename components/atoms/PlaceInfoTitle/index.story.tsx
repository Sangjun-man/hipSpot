import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoTitle from ".";

export default {
  title: " Atoms / PlaceInfoTitle",
  component: PlaceInfoTitle,
} as ComponentMeta<typeof PlaceInfoTitle>;

const Template: ComponentStory<typeof PlaceInfoTitle> = (args) => (
  <PlaceInfoTitle {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "영업시간",
};
