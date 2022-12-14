import type { ComponentStory, Meta } from '@storybook/react';
import { Title, Subtitle, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Highlight } from '@storybook/design-system';
import type { TextProps } from './Text';
import { Text as TextComponent } from './Text';

export default {
  title: 'Components/Typography/Text (Internal)',
  component: TextComponent,
  args: {
    color: 'surface.text.normal.lowContrast',
    fontFamily: 'text',
    fontSize: 200,
    fontWeight: 'regular',
    fontStyle: 'normal',
    textAlign: 'left',
    textDecorationLine: 'none',
    lineHeight: 'l',
    name: 'Storybook',
    children:
      'Current Accounts supercharged by RazorpayX come with integrated tools and integrations that make financial management and accounting simple',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            The Text component is a wrapper component based on Blade&apos;s token system and should
            be used only in rarest exceptions where your Typography needs are not satisfied by
            Title, Heading or Text typography components(eg: highlighting a word in the Title with
            gradients in a landing page).
          </Subtitle>
          <Title>Usage</Title>
          <Highlight language="tsx">{`import { Text } from '@razorpay/blade/components' \nimport type { TextProps } from '@razorpay/blade/components'`}</Highlight>
          <Title>Example</Title>
          <Primary />
          <Title>Properties</Title>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta<TextProps>;

const TextTemplate: ComponentStory<typeof TextComponent> = (args) => {
  return <TextComponent {...args}>{args.children}</TextComponent>;
};

export const Text = TextTemplate.bind({});
// Need to do this because of storybook's weird naming convention, More details here: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#single-story-hoisting
Text.storyName = 'Text';
