import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalBackground from ".";

export default {
  title: "Atoms / Modal / ModalBackground",
  component: ModalBackground,
} as ComponentMeta<typeof ModalBackground>;

const Template: ComponentStory<typeof ModalBackground> = (args) => (
  <ModalBackground {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
