/* eslint-disable import/extensions */
import React from 'react';
import { RenderText } from './RenderText';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

beforeAll(() => jest.spyOn(console, 'error').mockImplementation());
afterAll(() => jest.restoreAllMocks());

describe('<Text />', () => {
  it('should render regular text', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(<RenderText>{displayText}</RenderText>);
    expect(container).toMatchSnapshot();
  });
});
