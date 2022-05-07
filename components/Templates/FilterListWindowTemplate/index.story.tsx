import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterListWindow from ".";

export default {
  title: "template / FilterListWindow",
  component: FilterListWindow,
} as ComponentMeta<typeof FilterListWindow>;

const Template: ComponentStory<typeof FilterListWindow> = (args) => (
  <FilterListWindow {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  filterList: {
    categories: ["a", "b", "c"],
    items: ["x", "y", "z"],
  },
  isFilterListOpen: true,
  },
};
