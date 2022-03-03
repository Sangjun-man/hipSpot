import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";
import { PopOutArrow } from "../../../public/svg";
export default {
  title: "Atoms / Button / Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  children: "길찾기",
  theme: "primary",
};

export const addIcons = Template.bind({});

addIcons.args = {
  children: (
    <>
      길찾기
      <PopOutArrow />
    </>
  ),
};

export const SecondStory = Template.bind({});

SecondStory.args = {
  children: "@simonnskorea",
  theme: "secondary",
};
