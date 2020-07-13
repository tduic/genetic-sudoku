import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'components/App';

import '../styles/index.css';

const rootElement = document.getElementById('root');

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  rootElement,
);
