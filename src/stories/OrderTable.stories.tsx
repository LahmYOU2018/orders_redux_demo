/** @format */

import {Story} from '@storybook/react';
import {OrderTable, TableProps} from '../components/orderTable/OrderTable';

export default {
  title: 'Components/Order Table',
  component: OrderTable,
};

const orderList = [
    {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "item": "Caesar salad",
        "price": 4692
    },
    {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "item": "Caesar salad",
        "price": 4692
    }
];

const style = {'border-collapse': 'collapse'}

const Template: Story<TableProps> = args => {
  return (
    <OrderTable {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  orderList
};
