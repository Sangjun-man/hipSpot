import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoWrapper from ".";

export default {
  title: " Atoms /Place/ PlaceInfoWrapper",
  component: PlaceInfoWrapper,
} as ComponentMeta<typeof PlaceInfoWrapper>;

const Template: ComponentStory<typeof PlaceInfoWrapper> = (args) => (
  <PlaceInfoWrapper {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
