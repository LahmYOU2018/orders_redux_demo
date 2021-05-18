/** @format */

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {TABLE_HEADERS, VALUES_TO_DISPLAY} from '../../utils/common';

export interface OrderProps {
  id: string;
  customer: string;
  destination: string;
  item: string;
  price: number;
  event_name: string;
  sent_at_second?: number;
}

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

export const OrderTable: React.FC<TableProps> = ({orderList = []}) => {
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
          {orderList.map((order, index) => (
            <tr key={index}>
              {VALUES_TO_DISPLAY.map((value, index) => (
                <td key={index}>{value === 'price' ? `$ ${order.price/100}` : order[value as keyof OrderProps] }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
