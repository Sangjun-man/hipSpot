import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Info from "./Info";

export default {
  title: "Modules / InfoWindow / Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  infoList: [
    { title: "영업시간", content: "월~일 10:00 - 19:00" },
    { title: "주소", content: "서울 성동구 서울숲2길 19-13 1층" },
  ],
};
