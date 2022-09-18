import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tab from ".";

export default {
  title: " Atoms / InfoWindow / Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: "업체사진",
  selected: true,
};
