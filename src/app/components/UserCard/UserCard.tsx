import * as UC from "./UserCard.styles";

export interface UserCardProps {
  name: string;
  login: string;
  location: string;
  avatarUrl: string;
  publicRepositories: number;
  onClickRepositoriesLink?: () => void
}

export default function UserCard(props: UserCardProps) {
  return (
    <UC.Wrapper>
      <UC.Avatar src={props.avatarUrl} alt={props.name} />
      <UC.UserInfo>
        <UC.UserName>
          {props.name} <UC.UserLogin>{`(${props.login})`}</UC.UserLogin>
        </UC.UserName>
        {props.location && <UC.UserDetails>{props.location}</UC.UserDetails>}
        <UC.UserDetails>{`Repositórios: ${props.publicRepositories}`}</UC.UserDetails>
        {props.publicRepositories > 0 && props.onClickRepositoriesLink && (
          <UC.RepositoriesLink onClick={props.onClickRepositoriesLink}>
            Ver Repositórios
          </UC.RepositoriesLink>
        )}
      </UC.UserInfo>
    </UC.Wrapper>
  );
}
