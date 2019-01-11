import React, { PureComponent } from 'react';
import Table from './Table';

import Loader from '../loader/Loader';
import Error from '../error/Error';
import { IRow } from '../../utils/models/Row';

interface IProps { }

interface IState {
  loading: boolean,
  error: boolean,
  rows: IRow[],
}
class TableContainer extends PureComponent<IProps, IState> {
  state = {
    loading: false,
    error: false,
    rows: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true });

    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(rows => this.setState({ rows, error: false, loading: false }))
      .catch(err => this.setState({ error: true, loading: false }))
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }

    if (this.state.error) {
      return <Error retry={this.getData} />
    }

    return <Table rows={this.state.rows} />
  }
}

export default TableContainer;
