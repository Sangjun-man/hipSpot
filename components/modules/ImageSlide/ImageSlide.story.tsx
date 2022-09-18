import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageSlide from "./ImageSlide";

export default {
  title: " modules / ImageSlide",
  component: ImageSlide,
} as ComponentMeta<typeof ImageSlide>;

const Template: ComponentStory<typeof ImageSlide> = (args) => (
  <ImageSlide {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  imageList: [
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
  ],
};
