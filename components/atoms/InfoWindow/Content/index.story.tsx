import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Content from ".";

export default {
  title: " Atoms / InfoWIndow / Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  content: "123123123123",
};
