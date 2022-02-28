import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalContainer from ".";

export default {
  title: " Atoms /Modal / ModalContainer",
  component: ModalContainer,
} as ComponentMeta<typeof ModalContainer>;

const Template: ComponentStory<typeof ModalContainer> = (args) => (
  <ModalContainer {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
