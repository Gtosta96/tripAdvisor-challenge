import React from 'react';
import TestRenderer from 'react-test-renderer';

import Loader from './Loader';

describe('::Component -> components/loader/Loader.tsx::', () => {
  it('renders without crashing', () => {
    const component = TestRenderer.create(<Loader />)
    expect(component).toBeDefined();
  });
})
