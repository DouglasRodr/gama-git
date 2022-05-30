import { Story, Meta } from "@storybook/react";
import Pagination, { PaginationProps } from "../app/components/Pagination";

export default {
  title: "Example/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    
};
