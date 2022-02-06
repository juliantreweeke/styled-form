import styled, { css } from "styled-components";

const Container = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
  padding: 40px;
`;

export default function RoundedBox(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
