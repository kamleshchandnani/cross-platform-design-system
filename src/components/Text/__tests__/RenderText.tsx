import type { ReactElement } from 'react';
import { Text } from '../';
import type { TextProps } from '~components/03-Text-setup-jest/TextTypes';

export const RenderText = ({ children }: { children: TextProps['children'] }): ReactElement => (
  <Text
    color="surface.text.normal.highContrast"
    fontFamily="text"
    lineHeight="m"
    fontSize={25}
    fontWeight="regular"
  >
    {children}
  </Text>
);
