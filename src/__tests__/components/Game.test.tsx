import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Game } from 'components/game';

describe('Game', () => {
  test('should not have the winner banner on game start', () => {
    render(<Game />);
    const winBanner = screen.queryByTitle(/winBanner/i);
    expect(winBanner).toBe(null);
  });
});
