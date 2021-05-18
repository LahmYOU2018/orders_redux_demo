/** @format */

import {Story} from '@storybook/react';
import {OrderTable, TableProps} from '../components/orderTable/OrderTable';

export default {
  title: 'Components/Order Table',
  component: OrderTable,
};

const orderList = [
  {
    customer: 'Amanda Roberts',
    destination: '759 Thompson Union, East Natalie, CA 96079',
    event_name: 'CREATED',
    id: '188af307',
    item: 'Chicken kabob',
    price: 8850,
    sent_at_second: 297,
  },
  {
    customer: 'Amanda Roberts',
    destination: '759 Thompson Union, East Natalie, CA 96079',
    event_name: 'COOKED',
    id: '188af307',
    item: 'Chicken kabob',
    price: 8850,
    sent_at_second: 307,
  },
];

const Template: Story<TableProps> = args => {
  return <OrderTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  orderList,
};
