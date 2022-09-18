import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageComp from ".";

export default {
  title: "Atoms / ImageComp",
  component: ImageComp,
} as ComponentMeta<typeof ImageComp>;

const Template: ComponentStory<typeof ImageComp> = (args) => (
  <ImageComp {...args} />
);

export const Defalut = Template.bind({});

Defalut.args = {
  src: "/image/testImg.png",
  alt: "test",
  popUpstate: "thumbNail",
};
