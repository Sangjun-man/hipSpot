import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoWindowTemplate from ".";

export default {
  title: "Template / InfoWindowTemplate",
  component: InfoWindowTemplate,
} as ComponentMeta<typeof InfoWindowTemplate>;

const Template: ComponentStory<typeof InfoWindowTemplate> = (args) => (
  <InfoWindowTemplate />
);

export const FirstStory = Template.bind({});
