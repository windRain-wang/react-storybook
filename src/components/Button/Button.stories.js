// import React from "react";
import Button from "./Button"
import Center from "../Center/Center"

export default {
  title: 'Form/Button',
  component: Button,
  decorators: [Story => <Center>{
    <Story />
  }</Center>]
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Sucess = () => <Button variant="sucess">Sucess</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'PrimaryA'
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'SecondaryA'
}

export const LongPrimary = Template.bind({});
LongPrimary.args = {
  ...PrimaryA.args,
  children: 'LongPrimary'
}
