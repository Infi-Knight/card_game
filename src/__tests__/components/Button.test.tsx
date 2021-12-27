import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Button, PrimaryButton, SecondaryButton } from 'components/Button';

test('Button renders', () => {
  render(<Button>Deal</Button>);
  const button = screen.getByRole('button', { name: /Deal/i });
  expect(button).toBeInTheDocument();
});

test('PrimaryButton renders', () => {
  render(<PrimaryButton>Deal</PrimaryButton>);
  const button = screen.getByRole('button', { name: /Deal/i });
  expect(button).toBeInTheDocument();
});

test('SecondaryButton renders', () => {
  render(<SecondaryButton>Reset</SecondaryButton>);
  const button = screen.getByRole('button', { name: /Reset/i });
  expect(button).toBeInTheDocument();
});
