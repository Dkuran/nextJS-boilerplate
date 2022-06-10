import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from '../../components/atoms/Layout';

export default {
  title: 'Atoms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

export const Label = Template.bind({});
Label.args = {
  children: <p>Hey Layout</p>,
};
