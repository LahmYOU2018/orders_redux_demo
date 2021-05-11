/** @format */

import {Story} from '@storybook/react';
import {TableRow} from '../components/tableRow/TableRow';

export default {
  title: 'Components/Table Row',
  component: TableRow,
};

const tableHeaderText = 'Table Header';

const tableBodyText = 'Table Body';

const Template: Story = () => {
  return (
    <table style={{width: '100%'}}>
      <thead>
        <TableRow>
          <th>{tableHeaderText}</th>
          <th>{tableHeaderText}</th>
          <th>{tableHeaderText}</th>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <td>{tableBodyText}</td>
          <td>{tableBodyText}</td>
          <td>{tableBodyText}</td>
        </TableRow>
      </tbody>
    </table>
  );
};

export const Default = Template.bind({});
