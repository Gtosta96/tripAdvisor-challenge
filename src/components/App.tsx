import React from 'react';
import TableContainer from './table/TableContainer';
import { Container } from 'semantic-ui-react';

const App = () => (
  <Container fluid>
    <TableContainer />
  </Container>
  );

export default React.memo(App);
