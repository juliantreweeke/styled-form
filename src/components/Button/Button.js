import styled, { css } from "styled-components";
import { theme } from "../../Theme";

const variants = {
  primary: {
    backgroundColor: theme.colors.purple,
  },
  secondary: {
    backgroundColor: theme.colors.green,
  },
};

const StyledButton = styled.button`
  text-align: center;
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
  padding: 18px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  ${({ variant }) =>
    variant &&
    variants[variant] &&
    css`
      background-color: ${variants[variant].backgroundColor};
    `};
`;

export default function Button(props) {
  const { children, variant = "primary", ...otherProps } = props;
  return (
    <StyledButton variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
}
