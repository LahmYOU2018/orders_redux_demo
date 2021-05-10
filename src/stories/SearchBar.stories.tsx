import {Story} from '@storybook/react';
import {SearchBar, SearchBarProps} from '../components/searchBar/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    className :{
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

const Template: Story<SearchBarProps> = args => {
  return (
    <SearchBar {...args} />
  );
};

const handleChange = () => console.log('input value changed');

export const Default = Template.bind({});
Default.args = {
  label: 'Search here: ',
  placeholder: 'type to search',
  onChange: handleChange,
};