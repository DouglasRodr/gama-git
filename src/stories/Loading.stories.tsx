import { Story, Meta } from "@storybook/react";
import Loading, { LoadingProps } from "../app/components/Loading";

export default {
  title: "Example/Loading",
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Carregando..."
};
