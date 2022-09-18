import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoWindowTemplate from ".";

export default {
  title: "Template / InfoWindowTemplate",
  component: InfoWindowTemplate,
} as ComponentMeta<typeof InfoWindowTemplate>;

const Template: ComponentStory<typeof InfoWindowTemplate> = (args) => (
  <InfoWindowTemplate {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  tabState: { onHandling: false, top: window.innerHeight - 20 },
};
