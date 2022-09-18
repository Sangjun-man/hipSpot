import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PopUpWindow from ".";

export default {
  title: "Modules / InfoWindow / PopUpWindow",
  component: PopUpWindow,
} as ComponentMeta<typeof PopUpWindow>;

const Template: ComponentStory<typeof PopUpWindow> = (args) => (
  <PopUpWindow {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
