import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageTabList from "./ImageTabList";

export default {
  title: "Modules / ImageTabListWindow / ImageTabList",
  component: ImageTabList,
} as ComponentMeta<typeof ImageTabList>;

const Template: ComponentStory<typeof ImageTabList> = (args) => (
  <ImageTabList {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  imageTabList: [
    { name: "내부사진", selected: false },
    { name: "외부사진", selected: true },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
  ],
};
