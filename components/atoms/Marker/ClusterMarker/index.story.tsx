import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Marker from ".";

export default {
  title: "Atoms / Marker / RoundedMarker",
  component: Marker,
} as ComponentMeta<typeof Marker>;

const Template: ComponentStory<typeof Marker> = (args) => <Marker {...args} />;

export const Defalut = Template.bind({});

Defalut.args = {
  src: "/image/testImg3.png",
  alt: "test",
  borderColor: "#A58261",
};
