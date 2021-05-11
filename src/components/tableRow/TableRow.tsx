/** @format */

import React from 'react';
import styled from 'styled-components';

const TableRowRoot = styled.tr`
  text-align: left;
`;

export const TableRow: React.FC = ({children}) => {
  return (
    <TableRowRoot>
      {children}
    </TableRowRoot>
  );
};
