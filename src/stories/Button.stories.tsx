import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "../app/components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Buscar",
  loading: true,
};
