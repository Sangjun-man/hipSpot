import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MapWrapper } from "./style";

export default {
  title: "Atoms / NaverMap",
  component: MapWrapper,
} as ComponentMeta<typeof MapWrapper>;

const Template: ComponentStory<typeof MapWrapper> = (args) => (
  <MapWrapper {...args} />
);

export const NaverMapWrapper = Template.bind({});

NaverMapWrapper.args = {
  mobile: true,
};
