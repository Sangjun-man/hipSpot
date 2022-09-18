import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterButton from ".";

export default {
  title: "Atoms / Button / FilterButton",
  component: FilterButton,
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args} />
);

export const FilterBtn = Template.bind({});

FilterBtn.args = {
  children: "필터링 버튼",
  onClick: () => {},
};
