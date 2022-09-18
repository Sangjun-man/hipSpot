import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalHeader from ".";

export default {
  title: " Atoms /Modal / ModalHeader",
  component: ModalHeader,
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
