import type { ReactElement } from 'react';
import styled from 'styled-components/native';
import getTextStyles from './getTextStyles';
import type { TextProps, StyledTextProps } from './TextTypes';

const StyledText = styled.Text<StyledTextProps>((props) => getTextStyles(props));

export const Text = ({ children, ...props }: TextProps): ReactElement => {
  return <StyledText {...props}>{children}</StyledText>;
};
