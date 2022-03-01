import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterButtonList from ".";

export default {
  title: " Modules / FilterButtonList",
  component: FilterButtonList,
} as ComponentMeta<typeof FilterButtonList>;

const Template: ComponentStory<typeof FilterButtonList> = (args) => (
  <FilterButtonList {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
