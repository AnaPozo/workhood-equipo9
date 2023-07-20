import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../common/header/Navbar';

test('renders Navbar component', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

});
