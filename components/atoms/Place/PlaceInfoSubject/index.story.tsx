import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceInfoSubject from ".";

export default {
  title: " Atoms / Place / PlaceInfoSubject",
  component: PlaceInfoSubject,
} as ComponentMeta<typeof PlaceInfoSubject>;

const Template: ComponentStory<typeof PlaceInfoSubject> = (args) => (
  <PlaceInfoSubject {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "영업시간",
};
