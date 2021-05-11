/** @format */

import {mount} from 'enzyme';
import {TableRow} from './TableRow';

describe('TableRow', () => {
  const tableHeaderText = 'Table Header';
  const tableBodyText = 'Table Body';

  test('should render table row in table header', () => {
    const shallowComponent = mount(
      <table>
        <thead>
          <TableRow>
            <th>{tableHeaderText}</th>
            <th>{tableHeaderText}</th>
          </TableRow>
          <TableRow>
            <th>{tableHeaderText}</th>
            <th>{tableHeaderText}</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td>{tableBodyText}</td>
            <td>{tableBodyText}</td>
          </TableRow>
          <TableRow>
            <td>{tableBodyText}</td>
            <td>{tableBodyText}</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(shallowComponent.find('tr')).toHaveLength(4);
    expect(shallowComponent.find('th')).toHaveLength(4);
    expect(shallowComponent.find('td')).toHaveLength(4);
  });
});
