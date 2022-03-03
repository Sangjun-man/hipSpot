import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainTemplate from ".";

export default {
  title: " Template / MainTemplate",
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate />
);

export const FirstStory = Template.bind({});
