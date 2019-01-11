import React, { ReactElement } from 'react';
import TestRenderer from 'react-test-renderer';

import Error from './Error';

describe('::Component -> components/error/Error.tsx::', () => {

  let component: TestRenderer.ReactTestRenderer;
  let retryMockFn: jest.Mock;
  beforeEach(() => {
    retryMockFn = jest.fn();
    component = TestRenderer.create(<Error retry={retryMockFn} />)
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should find and click on retry button', () => {
    const button = component.root.find((e) => e.type === 'button')
    button.props.onClick();

    expect(button.children[0]).toBe('Retry');
    expect(retryMockFn).toHaveBeenCalled();
  });
})
