/** @format */

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {TABLE_HEADERS, VALUES_TO_DISPLAY} from '../../utils/common';

export interface OrderProps {
  customer?: string;
  destination?: string;
  item?: string;
  price?: number;
  id?: string;
  sent_at_second?: string;
  event_name?: string;
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
      padding: 5px;
    }
    thead {
      text-align: center;
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
              {Object.keys(order).map(
                (value, index) =>
                  VALUES_TO_DISPLAY.includes(value) && <td key={index}>{order[value as keyof OrderProps]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
