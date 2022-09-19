import type { CSSObject } from 'styled-components';

const screenReaderStyles: CSSObject = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: `1px`,
  margin: '0 -1px -1px 0',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: `1px`,
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};

export { screenReaderStyles };
