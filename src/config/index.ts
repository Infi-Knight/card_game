// stores app-wide configuration
import { Rank, Suit } from 'types';

export const NUM_CARDS_TO_DEAL = 5;

export const suits: ReadonlyArray<Suit> = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
export const ranks: ReadonlyArray<Rank> = [
  Rank.Ace,
  Rank.Two,
  Rank.Three,
  Rank.Four,
  Rank.Five,
  Rank.Six,
  Rank.Seven,
  Rank.Eight,
  Rank.Nine,
  Rank.Ten,
  Rank.Jack,
  Rank.Queen,
  Rank.King,
];
