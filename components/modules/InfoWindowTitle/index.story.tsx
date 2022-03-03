import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoWindowTitle from ".";

export default {
  title: " Modules / InfoWindowTitle",
  component: InfoWindowTitle,
} as ComponentMeta<typeof InfoWindowTitle>;

const Template: ComponentStory<typeof InfoWindowTitle> = (args) => (
  <InfoWindowTitle {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: "시몬스 그로서리 스토어",
  hashTag: ["시몬스", "침대", "편해요?"],
};
