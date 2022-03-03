import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoContent from ".";

export default {
  title: " Atoms / Place / PlaceInfoContent",
  component: PlaceInfoContent,
} as ComponentMeta<typeof PlaceInfoContent>;

const Template: ComponentStory<typeof PlaceInfoContent> = (args) => (
  <PlaceInfoContent {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  content: "123123123123",
};
