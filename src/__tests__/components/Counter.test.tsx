import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Counter } from 'components/game';

test('Counter renders with given label and count', () => {
  const count = 99;
  const label = 'winter is coming';
  render(<Counter count={count} label={label} />);
  const countEl = screen.getByText(count);
  const labelEl = screen.getByText(label);
  expect(countEl).toBeInTheDocument();
  expect(labelEl).toBeInTheDocument();
});
