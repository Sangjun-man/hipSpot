import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterListButtonWrapper from ".";

export default {
  title: "Atoms / FilterListWrapper",
  component: FilterListButtonWrapper,
} as ComponentMeta<typeof FilterListButtonWrapper>;

const Template: ComponentStory<typeof FilterListButtonWrapper> = (args) => (
  <FilterListButtonWrapper {...args} />
);

export const FirstStory = Template.bind({});

// FirstStory.args = {};
