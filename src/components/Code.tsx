import React, { ReactElement } from 'react';

function Code(props: any): ReactElement {
  return <code>{JSON.stringify(props)}</code>;
}

export default Code;
