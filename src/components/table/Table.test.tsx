import React from 'react';
import TestRenderer from 'react-test-renderer';

import Table from './Table';
import { IRow } from '../../utils/models/Row';
import { Label } from 'semantic-ui-react';

const mockRows: IRow[] = [{
  id: 123,
  title: 'mockTitle',
  created_at: '2019-01-11T02:40:47Z',
  updated_at: '2019-01-11T02:40:47Z',
  labels: [{ id: 1, name: 'label1' }, { id: 2, name: 'label2' }],
  state: 'mockState',
}];

describe('::Component -> components/table/Table.tsx::', () => {

  let component: TestRenderer.ReactTestRenderer;
  beforeEach(() => {
    component = TestRenderer.create(<Table rows={mockRows} />)
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  })

  it('should find issue id', () => {
    const label = component.root.findByType(Label);
    expect(label.props.children).toBe(123);
  })
})
