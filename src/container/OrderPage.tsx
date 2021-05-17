/** @format */

import React from 'react';
import styled from 'styled-components';
import {OrderTable, OrderProps} from '../components/orderTable/OrderTable';
import {SearchBar} from '../components/searchBar/SearchBar';

const OrderPageLayout = styled.main`
  width: 80%;
  margin: 64px auto;
`;
OrderPageLayout.displayName = 'OrderPageLayout';

export interface OrderPageProps {
  orders?: OrderProps[];
}

export const OrderPage: React.FC<OrderPageProps> = ({orders = []}) => {
  const handleSearch = () => {
    alert('search bar value changed');
  };

  return (
    <OrderPageLayout role="main">
      <SearchBar
        label="Search order: "
        placeholder="type to search"
        onChange={handleSearch} 
      />
      <OrderTable orderList={orders} />
    </OrderPageLayout>
  );
};
