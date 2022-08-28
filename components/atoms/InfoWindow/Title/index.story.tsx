import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from ".";

export default {
  title: " Atoms / InfoWindow / Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: "시몬스 그로서리 스토어",
};
