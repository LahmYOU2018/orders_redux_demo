/** @format */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TABLE_HEADERS } from '../../utils/common';
import { OrderProps } from '../../dataModel/Order';
import { getPriceStr } from '../../utils/util';

export interface TableProps {
  orderList?: OrderProps[];
}

const GlobalStyle = createGlobalStyle`
  table {
    font-size: 12px;
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td, tr {
      padding: 8px 4px;
      min-width: 40px;
    }
    thead {
      text-align: center;
      font-size: 16px;
      font-weight: 800;
    }
  }
`;

export const OrderTable: React.FC<TableProps> = ({ orderList = [] }) => {
  return (
    <>
      <GlobalStyle />
      <table>
        <thead>
          <tr>
            {TABLE_HEADERS.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {orderList.map((order: OrderProps, index) => (
            <tr key={index}>
              <td>{order['id']}</td>
              <td>{order['customer']}</td>
              <td>{order['destination']}</td>
              <td>{order['item']}</td>
              <td>{getPriceStr(order['price'])}</td>
              <td>{order['event_name']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
