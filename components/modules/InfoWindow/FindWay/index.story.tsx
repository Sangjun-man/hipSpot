import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FindWay from "./FindWay";

export default {
  title: "Modules / InfoWindow / FindWay",
  component: FindWay,
} as ComponentMeta<typeof FindWay>;

const Template: ComponentStory<typeof FindWay> = (args) => (
  <FindWay {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
