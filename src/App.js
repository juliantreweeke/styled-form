import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Container from "./components/Container/Container";
import RoundedBox from "./components/RoundedBox/RoundedBox";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Theme from "./Theme";
import GlobalStyles from "./GlobalStyles";

// TODO move into layout folder so these can be shared
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 64px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
`;

// TODO put in shared typography folder
const Heading = styled.h1`
  // TODO add line heights to design system
  line-height: 1.1;
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  // TODO get styled components breakpoint variable to work in media
  @media (min-width: 446px) {
    font-size: 48px;
  }
`;
const HelpText = styled.small`
  color: ${(props) => props.theme.colors.greyBlue};
  font-size: 12px;
`;
const AccentText = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.fontWeights.ExtraBold};
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
const ExtraBold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.ExtraBold};
`;
const Bold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.Bold};
`;

// TODO make into layout column component with gap prop or Stack component
const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  // TODO consolidate and clean up break points
  @media (min-width: 651px) {
    text-align: left;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// NOTE if this was a repeated pattern I would include this in a seperate Help Text component
const HelpTextContainer = styled.div`
  padding: 6px;
  text-align: center;
  margin: auto;
`;

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Container>
        <Row>
          <Column>
            <HeadingContent>
              <Heading>Learn to code by watching others</Heading>
              <div>
                <Text>
                  See how experienced developers solve problems in real-time.
                </Text>
                <Text>
                  Watching scripted tutorials is great, but understanding how
                  developers think is invaluable.
                </Text>
              </div>
            </HeadingContent>
          </Column>
          <Column>
            <SignUpContent>
              {/* // TODO look at removing cursor from div variant */}
              <Button as="div">
                <ExtraBold>Try it free 7 days</ExtraBold> then $20/mo.
                thereafter
              </Button>
              <RoundedBox>
                <Form>
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="password" placeholder="Password" />
                  <Button type="submit" variant="secondary">
                    <Bold>CLAIM YOUR FREE TRIAL</Bold>
                  </Button>
                </Form>
                <HelpTextContainer>
                  <HelpText>
                    By clicking the button, you are agreeing to our{" "}
                    <AccentText>Terms and Services</AccentText>
                  </HelpText>
                </HelpTextContainer>
              </RoundedBox>
            </SignUpContent>
          </Column>
        </Row>
      </Container>
    </Theme>
  );
}

export default App;
