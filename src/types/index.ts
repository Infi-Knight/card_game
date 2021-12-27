export enum Suit {
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
  Hearts = 'Hearts',
  Spades = 'Spades',
}

export enum Rank {
  Ace = 'A',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
}

export type Card = {
  rank: Rank;
  suit: Suit;
};

export enum GameStatus {
  WON = 'WON',
  DEAL = 'DEAL',
  LOST = 'LOST',
}

export type Deck = Card[];
