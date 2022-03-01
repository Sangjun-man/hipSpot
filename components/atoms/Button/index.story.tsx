import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";
import Image from "next/image";
// import testSVG from '/svg/popOutArrow.svg'

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
    <div>
      길찾기
      <Image src="/svg/popOutArrow.svg" alt="나오나?" width={18} height={16} />
    </div>
  ),
};

export const SecondStory = Template.bind({});

SecondStory.args = {
  children: "@simonnskorea",
  theme: "secondary",
};
