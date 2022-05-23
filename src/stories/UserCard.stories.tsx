import { Story, Meta } from "@storybook/react";
import UserCard, { UserCardProps } from "../app/components/UserCard";

export default {
  title: "Example/UserCard",
  component: UserCard,
} as Meta;

const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Douglas Rodrigues",
  login: "DouglasRodr",
  location: "Petrolina-PE",
  avatarUrl: "https://avatars.githubusercontent.com/u/63268892?v=4",
  publicRepositories: 14,
};
