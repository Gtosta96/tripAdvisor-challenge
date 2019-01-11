import React, { Fragment } from 'react';
import { Icon, Label, Table, List, Header } from 'semantic-ui-react';

import { dateFormatter } from '../../utils/formatters';
import { IRow } from '../../utils/models/Row';

interface IProps {
  rows: IRow[],
}
const TableExamplePagination = (props: IProps) => (
  <Fragment>
    <Header as="h2">
      <Icon name="facebook official" />
      <Header.Content>Issue Tracker</Header.Content>
    </Header>

    <Table size="large" padded="very" striped celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Issue Number</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Updated At</Table.HeaderCell>
          <Table.HeaderCell>Labels</Table.HeaderCell>
          <Table.HeaderCell>State</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.rows.map((row) => (
          <Table.Row key={row.id}>
          <Table.Cell><Label>{row.id}</Label></Table.Cell>
          <Table.Cell>{row.title}</Table.Cell>
          <Table.Cell>{dateFormatter(row.created_at)}</Table.Cell>
          <Table.Cell>{dateFormatter(row.updated_at)}</Table.Cell>
          <Table.Cell>
            {row.labels.map((label) => (
              <List bulleted key={label.id}>
                <List.Item>{label.name}</List.Item>
                <List.Item>{label.name}</List.Item>
              </List>
            ))}
          </Table.Cell>
          <Table.Cell>{row.state}</Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Fragment>
)

export default React.memo(TableExamplePagination);
