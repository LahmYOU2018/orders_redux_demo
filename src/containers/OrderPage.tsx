/** @format */

import React, {useState} from 'react';
import styled from 'styled-components';
import {OrderTable} from '../components/orderTable/OrderTable';
import {SearchBar} from '../components/searchBar/SearchBar';
import {OrderProps} from '../dataModel/Order';
import {useFilterOrders} from '../customHooks/useFilterOrders';

const OrderPageLayout = styled.main`
  width: 90%;
  margin: 32px auto;
`;
OrderPageLayout.displayName = 'OrderPageLayout';

const OrderPageHeader = styled.h1`
  text-align: center;
`;
OrderPageHeader.displayName = 'OrderPageHeader';

const OrderCount = styled.p`
  font-size: 12px;
`;
OrderCount.displayName = 'OrderCount';

const SearchHeader = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
`;
SearchHeader.displayName = 'SearchHeader';

export interface OrderPageProps {
  orders?: OrderProps[];
}

export const OrderPage: React.FC<OrderPageProps> = ({orders = []}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredOrders = useFilterOrders(orders, searchValue);

  return (
    <OrderPageLayout role="main">
      <OrderPageHeader>Order Demo</OrderPageHeader>
      <SearchHeader>
        <SearchBar
          label="Search by price: $"
          value={searchValue}
          placeholder="enter the mount"
          onChange={handleSearch}
        />
        <OrderCount>Total Count: {filteredOrders.length}</OrderCount>
      </SearchHeader>
      <OrderTable orderList={filteredOrders} />
    </OrderPageLayout>
  );
};
