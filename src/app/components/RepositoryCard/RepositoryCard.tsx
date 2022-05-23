import * as RC from "./RepositoryCard.styles";

export interface RepositoryCardProps {
  name: string;
  description: string;
  language: string;
  updatedAt: string;
  repositoryUrl: string;
}

export default function RepositoryCard(props: RepositoryCardProps) {
  return (
    <RC.Wrapper href={props.repositoryUrl} target="_blank">
      <RC.RepositoryInfo>
        <RC.RepositoryName>
          {props.name}
          {props.language && (
            <RC.RepositoryLanguage>{props.language}</RC.RepositoryLanguage>
          )}
        </RC.RepositoryName>
        {props.description && (
          <RC.RepositoryDetails>{props.description}</RC.RepositoryDetails>
        )}
        {props.updatedAt && <RC.RepositoryUpdatedA>{props.updatedAt}</RC.RepositoryUpdatedA>}
      </RC.RepositoryInfo>
    </RC.Wrapper>
  );
}
