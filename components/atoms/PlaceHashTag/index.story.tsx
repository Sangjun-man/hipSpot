import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceHashTag from ".";

export default {
  title: " Atoms / PlaceHashTag",
  component: PlaceHashTag,
} as ComponentMeta<typeof PlaceHashTag>;

const Template: ComponentStory<typeof PlaceHashTag> = (args) => (
  <PlaceHashTag {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  hashTag: ["청담동", "팝업스토어", "청담핫플"],
};
