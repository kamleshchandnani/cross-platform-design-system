import type { ReactElement } from 'react';
import styled from 'styled-components';
import getTextStyles from './getTextStyles';
import type { TextProps, StyledTextProps } from './TextTypes';

const StyledText = styled.div<StyledTextProps>((props) => getTextStyles(props));

export const Text = ({ children, accessibilityProps, ...props }: TextProps): ReactElement => {
  return <StyledText {...props}>{children}</StyledText>;
};
