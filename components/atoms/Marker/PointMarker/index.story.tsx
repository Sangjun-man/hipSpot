import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PointMarker } from ".";

export default {
  title: "Atoms / Marker / PointMarker",
  component: PointMarker,
} as ComponentMeta<typeof PointMarker>;

const Template: ComponentStory<typeof PointMarker> = (args) => (
  <PointMarker {...args} />
);

export const Defalut = Template.bind({});

Defalut.args = {
  src: "/image/testImg3.png",
  alt: "test",
  borderColor: "#A58261",
};
