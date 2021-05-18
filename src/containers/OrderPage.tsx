/** @format */

import React from 'react';
import styled from 'styled-components';
import {OrderTable, OrderProps} from '../components/orderTable/OrderTable';
import {SearchBar} from '../components/searchBar/SearchBar';

const OrderPageLayout = styled.main`
  width: 90%;
  margin: 32px auto;
`;
OrderPageLayout.displayName = 'OrderPageLayout';

const OrderPageHeader = styled.h1`
  text-align: center;
`;
OrderPageHeader.displayName = 'OrderPageHeader';

export interface OrderPageProps {
  orders?: OrderProps[];
}

export const OrderPage: React.FC<OrderPageProps> = ({orders = []}) => {
  const handleSearch = () => {
    alert('search bar value changed');
  };

  return (
    <OrderPageLayout role="main">
      <OrderPageHeader>Order Demo</OrderPageHeader> 
      <SearchBar
        label="Search by price: $"
        placeholder="enter the mount"
        onChange={handleSearch} 
      />
      <OrderTable orderList={orders} />
    </OrderPageLayout>
  );
};
