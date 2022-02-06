import styled, { css } from "styled-components";

const StyledInput = styled.input`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  padding: 22px 34px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey};
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
`;

export default function Input(props) {
  const { children, ...otherProps } = props;
  return <StyledInput {...otherProps}>{children}</StyledInput>;
}
