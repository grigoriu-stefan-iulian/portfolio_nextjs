import React from 'react';
import ReactDOM from 'react-dom';
import Technologies from './Technologies';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Technologies />, div);
  ReactDOM.unmountComponentAtNode(div);
});