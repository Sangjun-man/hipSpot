import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoContent from ".";

export default {
  title: " Atoms / PlaceInfoContent",
  component: PlaceInfoContent,
} as ComponentMeta<typeof PlaceInfoContent>;

const Template: ComponentStory<typeof PlaceInfoContent> = (args) => (
  <PlaceInfoContent {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "123123123123",
};
