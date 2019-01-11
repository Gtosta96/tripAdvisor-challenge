import React from 'react';
import TestRenderer from 'react-test-renderer';

import TableContainer from './TableContainer';
import Loader from '../loader/Loader';
import Error from '../error/Error';

describe('::Component -> components/table/TableContainer.tsx::', () => {

  let component: TestRenderer.ReactTestRenderer;
  beforeEach(() => {
    component = TestRenderer.create(<TableContainer />)
  });

  /* -- */

  it('renders without crashing', () => {
    const component = TestRenderer.create(<TableContainer/>);
    expect(component).toBeDefined();
  });

  // FIXME
  // REF: https://github.com/airbnb/enzyme/issues/944
  it.skip('getData function should be called on ComponentDidMount', () => {
    const cdmSpy = jest.spyOn(component.root.instance, 'componentDidMount');
    const getDataSpy = jest.spyOn(component.root.instance, 'getData');

    expect(cdmSpy).toHaveBeenCalled();
    expect(getDataSpy).toHaveBeenCalled();
  });

  it('should render Loader Component', () => {
    component.root.instance.setState({ loading: true })
    const loader = component.root.findByType(Loader);

    expect(loader).toBeDefined();
  });

  it('should render Error Component', () => {
    component.root.instance.setState({ error: true, loading: false })
    const error = component.root.findByType(Error);

    expect(error).toBeDefined();
  });
})
