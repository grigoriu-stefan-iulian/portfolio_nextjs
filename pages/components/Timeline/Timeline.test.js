import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Timeline';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timeline />, div);
  ReactDOM.unmountComponentAtNode(div);
});