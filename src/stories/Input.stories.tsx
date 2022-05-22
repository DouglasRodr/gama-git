import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "../app/components/Input";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Digite seu Usuário"
};
