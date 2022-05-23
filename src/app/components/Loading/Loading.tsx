import * as L from "./Loading.styles";

export interface LoadingProps {
  label?: string;
}

export default function Loading(props: LoadingProps) {
  return (
    <L.Wrapper>
      <L.Loading />
      <L.Label>{props.label || "Carregando"}</L.Label>
    </L.Wrapper>
  );
}
