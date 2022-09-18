import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardWrapper from ".";

export default {
  title: " Atoms / Card / Layout",
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper {...args} />
);

export const Layout = Template.bind({});

Layout.args = {};
