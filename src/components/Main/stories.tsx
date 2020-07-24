import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJs and Styled Components'
    )}
  />
)
