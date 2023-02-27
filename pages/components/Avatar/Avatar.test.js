import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar />, div);
  ReactDOM.unmountComponentAtNode(div);
});