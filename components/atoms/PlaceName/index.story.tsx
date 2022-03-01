import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceName from ".";

export default {
  title: " Atoms / PlaceName",
  component: PlaceName,
} as ComponentMeta<typeof PlaceName>;

const Template: ComponentStory<typeof PlaceName> = (args) => (
  <PlaceName {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: "시몬스 그로서리 스토어",
};
