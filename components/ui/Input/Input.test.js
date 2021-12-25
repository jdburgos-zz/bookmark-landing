/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Input } from './Input';

describe('Input', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Input />, div);
  });
});
