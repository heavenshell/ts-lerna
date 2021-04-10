import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { Page, Props as PageProps } from './Page'
import { count, results } from './__fixtures__/pokemons.json'

import '../../assets/antd-custom.less'

const story: Meta = {
  title: 'next-app/Page',
  component: Page,
}

const Template: Story<PageProps> = (args) => <Page {...args} />

export const component = Template.bind({})
component.storyName = 'default'
component.args = {
  current: 1,
  onChange: (page, pageSize) => action('onChange')({ page, pageSize }),
  results,
  total: count,
}

export default story
