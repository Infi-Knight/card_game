import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('smoke test', () => {
  render(<App />);
  const cardsLeftElement = screen.getByText(/Cards/i);
  expect(cardsLeftElement).toBeInTheDocument();
});
