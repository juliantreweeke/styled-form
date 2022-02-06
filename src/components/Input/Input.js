import styled, { css } from "styled-components";
import { theme } from "../../Theme";
import { ReactComponent as DangerIcon } from "../../images/icon-error.svg";

const variants = {
  danger: {
    color: theme.colors.red,
    outline: `2px solid ${theme.colors.red}`,
  },
};

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.white};
  outline: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: ${(props) => props.theme.formRadius};
  border-radius: ${(props) => props.theme.radius};

  ::placeholder {
    color: ${(props) => props.theme.colors.darkGrey};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
  // TODO see how to do focus within via styled components
  ::focus-within {
    border: 1px solid ${(props) => props.theme.colors.black};
  }

  ${({ variant }) =>
    variant &&
    variants[variant] &&
    // TODO work out how to spread into here instead
    css`
      outline: ${variants[variant].outline};
      color: ${variants[variant].color};
    `};
`;

const Container = styled.div`
  width: 100%;
  min-height: 90px;
`;

const HelpText = styled.p`
  padding-top: 10px;
  font-size: 10px;
  font-style: italic;
  text-align: right;
  // TODO look at dryer way as duplication above
  ${({ variant }) =>
    variant &&
    variants[variant] &&
    css`
      color: ${variants[variant].color};
    `};
`;

// TODO create FormInput component and seperate Input out from the container and helpText
export default function Input(props) {
  const { children, variant, helpText, ...otherProps } = props;

  const hasError = variant === "error";

  return (
    <Container>
      <StyledInput variant={variant} {...otherProps}>
        {children}
        {/* TODO Look at why Icon breaks {hasError && <DangerIcon />} */}
      </StyledInput>
      {helpText && <HelpText variant={variant}>{helpText}</HelpText>}
    </Container>
  );
}
