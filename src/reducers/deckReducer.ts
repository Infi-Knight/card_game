import { shuffle } from 'lodash';
import { NUM_CARDS_TO_DEAL } from 'config';
import { GameStatus, Card, Deck, Rank } from 'types';
import { getCountOfCard, getFreshDeck } from 'utils';

export type GameState = {
  cardsToShow: Card[];
  remainingCards: Card[];
  status: GameStatus;
};

export enum ActionType {
  DEAL_CARDS = 'DEAL_CARDS',
  RESET_GAME = 'RESET_GAME',
}
export type DeckReducerAction = { type: ActionType };

export function deckReducer(state: GameState, action: DeckReducerAction): GameState {
  const { type } = action;
  const { remainingCards: currentRemainingCards } = state;

  switch (type) {
    case ActionType.DEAL_CARDS: {
      const { cardsToShow, remainingCards } = dealCardsAndUpdateDeck(currentRemainingCards);
      const cardsLeft = remainingCards.length;

      const acesLeft = getCountOfCard(Rank.Ace, remainingCards);
      if (acesLeft === 0) {
        return {
          // If we can't deal anymore, show the remaining cards, else show the cards dealt
          cardsToShow: cardsLeft < NUM_CARDS_TO_DEAL ? remainingCards : cardsToShow,
          remainingCards,
          status: GameStatus.LOST,
        };
      }
      if (cardsLeft < NUM_CARDS_TO_DEAL && acesLeft > 0) {
        return {
          cardsToShow: remainingCards,
          remainingCards,
          status: GameStatus.WON,
        };
      }

      return { cardsToShow, remainingCards, status: GameStatus.DEAL };
    }
    case ActionType.RESET_GAME: {
      return { ...dealCardsAndUpdateDeck(getFreshDeck()), status: GameStatus.DEAL };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}

export function dealCardsAndUpdateDeck(remainingDeck: Deck): GameState {
  const remainingCards = shuffle(remainingDeck);
  const newCardsToShow = remainingCards.splice(0, NUM_CARDS_TO_DEAL);
  return { cardsToShow: newCardsToShow, remainingCards, status: GameStatus.DEAL };
}
