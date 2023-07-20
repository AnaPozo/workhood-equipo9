import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from '../common/footer/Footer';

test('renders Footer component correctly', () => {
  const { getByText } = render(<Footer />);
  
  const headingElement = getByText('WORK HOOD');
  expect(headingElement).toBeInTheDocument();

  const aboutUsElement = getByText('Sobre Nosotros');
  expect(aboutUsElement).toBeInTheDocument();

  const contactUsElement = getByText('Contáctanos');
  expect(contactUsElement).toBeInTheDocument();
});
