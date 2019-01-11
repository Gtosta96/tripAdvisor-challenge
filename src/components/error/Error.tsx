import React, { Fragment } from 'react';

import { Icon, Button, Segment, Header } from 'semantic-ui-react';

interface IProps {
  retry(): void
}
const Error = (props: IProps) => (
  <Segment size="massive" textAlign="center" style={{ border: 'none', boxShadow: 'none' }}>
    <Header icon>
      <Icon name="frown outline" />
      Something went wrong
    </Header>
    <Segment.Inline>
      <Button basic size="large" onClick={props.retry}>Retry</Button>
    </Segment.Inline>
  </Segment>
);

export default React.memo(Error);