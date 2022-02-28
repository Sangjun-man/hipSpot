import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalStateButton from ".";

export default {
  title: "Atoms / Button / FilterMenuStateButton",
  component: ModalStateButton,
} as ComponentMeta<typeof ModalStateButton>;

const Template: ComponentStory<typeof ModalStateButton> = (args) => (
  <ModalStateButton {...args} />
);

export const ModalStateBtn = Template.bind({});

ModalStateBtn.args = {
  opened: false,
};
