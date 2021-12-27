/* eslint-disable no-restricted-syntax */
import { ranks, suits } from 'config';
import { Rank, Deck, Card } from 'types';

export const getCountOfCard = (rank: Rank, deck: Deck): number => {
  return deck.filter((card) => card.rank === rank).length;
};

// TODO: replace for..of with some other construct, make ES lint happy
export function getFreshDeck(): Deck {
  const deck: Card[] = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }
  return deck;
}
