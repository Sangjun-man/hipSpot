import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from ".";

export default {
  title: " Atoms / InfoWindow / Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const FirstStory = Template.bind({});
