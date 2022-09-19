import React from 'react';
import { RenderText } from './RenderText';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

beforeAll(() => jest.spyOn(console, 'error').mockImplementation());
afterAll(() => jest.restoreAllMocks());

describe('<Text />', () => {
  it('should render regular text', () => {
    const displayText = 'Displaying some text';
    const { toJSON, getByText } = renderWithTheme(<RenderText>{displayText}</RenderText>);
    expect(getByText('Displaying some text')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
