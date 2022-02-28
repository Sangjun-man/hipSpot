import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardLayout from ".";

export default {
  title: " Atoms / Card / Layout",
  component: CardLayout,
} as ComponentMeta<typeof CardLayout>;

const Template: ComponentStory<typeof CardLayout> = (args) => (
  <CardLayout {...args} />
);

export const Layout = Template.bind({});

Layout.args = {};
