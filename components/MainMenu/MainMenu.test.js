/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { MainMenu } from './MainMenu';

describe('MainMenu', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MainMenu />, div);
  });
});
