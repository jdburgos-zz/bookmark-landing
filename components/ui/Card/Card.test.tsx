/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Card } from './Card';

describe('Card', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);
  });
});
