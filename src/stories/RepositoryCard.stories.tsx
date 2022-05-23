import { Story, Meta } from "@storybook/react";
import RepositoryCard, { RepositoryCardProps } from "../app/components/RepositoryCard";

export default {
  title: "Example/RepositoryCard",
  component: RepositoryCard,
} as Meta;

const Template: Story<RepositoryCardProps> = (args) => <RepositoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "gama-git",
  description: "Projeto GamaGit React Hiring Coders #3",
  language: "Typescript",
  updatedAt: "Atualizado há 5 minutos",
  repositoryUrl: "https://github.com/DouglasRodr",
};
