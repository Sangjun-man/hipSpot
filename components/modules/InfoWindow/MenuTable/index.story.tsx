import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuTable from "./MenuTable";

export default {
  title: "Modules / InfoWindow / MenuTable",
  component: MenuTable,
} as ComponentMeta<typeof MenuTable>;

const Template: ComponentStory<typeof MenuTable> = (args) => (
  <MenuTable {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  menuInfoList: [
    { menu: "아이스 아메리카노", price: 5000 },
    { menu: "아이스 카페라떼", price: 9.5 },
    { menu: "아이스 카푸치노", price: "5000원" },
  ],
};
