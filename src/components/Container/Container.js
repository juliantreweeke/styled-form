import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 75px 18px;
  max-width: 1126px;
  margin: 0 auto;

  @media (min-width: 446px) {
    height: 100vh;
  }
`;

export default function Layout(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
