import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoWindowContents from ".";

export default {
  title: "Modules / InfoWindowContents",
  component: InfoWindowContents,
} as ComponentMeta<typeof InfoWindowContents>;

const Template: ComponentStory<typeof InfoWindowContents> = (args) => (
  <InfoWindowContents {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  infoList: [
    { title: "영업시간", content: "월~일 10:00 - 19:00" },
    { title: "주소", content: "사랑시 고백구 행복동" },
    { title: "전화번호", content: "010-7272-8403" },
  ],
};
