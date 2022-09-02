import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SubTitle from ".";

export default {
  title: " Atoms / InfoWindow / SubTitle",
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: "주소",
};
