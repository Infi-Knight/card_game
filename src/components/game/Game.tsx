import * as React from 'react';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';
import useSound from 'use-sound';
import cardPullSound from 'assets/audio/card_pull.mp3';
import dunDunDunSound from 'assets/audio/dun-dun-dun.mp3';
import fanfareSound from 'assets/audio/fanfare.mp3';
import cardShuffleSound from 'assets/audio/shuffle.mp3';
import { ReactComponent as WinBanner } from 'assets/winner.svg';
import { PrimaryButton, SecondaryButton } from 'components/Button';
import { Cards } from 'components/Cards';
import { Header } from 'components/Header';
import { Counter } from 'components/game/Counter';
import { useGameConfig } from 'context/ConfigContext';
import { dealCardsAndUpdateDeck, deckReducer, ActionType } from 'reducers/deckReducer';
import { GameStatus, Rank } from 'types';
import { getCountOfCard, getFreshDeck } from 'utils';

const confettiConfig: ConfettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 10000,
  stagger: 3,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};
export const Game = (): JSX.Element => {
  const [{ cardsToShow, remainingCards, status }, dispatch] = React.useReducer(
    deckReducer,
    getFreshDeck(),
    dealCardsAndUpdateDeck
  );
  const { soundEnabled } = useGameConfig();
  const [playCardShuffleSound] = useSound(cardShuffleSound, {
    volume: 0.25,
  });
  const [playCardPullSound, { stop: stopCardPullSound }] = useSound(cardPullSound, {
    volume: 0.25,
  });
  const [playGameLostSound] = useSound(dunDunDunSound, { volume: 0.25 });
  const [playGameWonSound] = useSound(fanfareSound, { volume: 0.25 });

  const acesLeft = getCountOfCard(Rank.Ace, remainingCards);

  React.useEffect(() => {
    if (soundEnabled) {
      if (status === GameStatus.LOST) {
        stopCardPullSound();
        playGameLostSound();
      }
      if (status === GameStatus.WON) {
        stopCardPullSound();
        playGameWonSound();
      }
    }
  }, [playGameLostSound, playGameWonSound, soundEnabled, status, stopCardPullSound]);

  const dealCards = () => {
    dispatch({ type: ActionType.DEAL_CARDS });
    if (soundEnabled) {
      if (soundEnabled) {
        playCardPullSound();
      }
    }
  };

  const resetGame = () => {
    dispatch({ type: ActionType.RESET_GAME });
    if (soundEnabled) {
      if (soundEnabled) {
        playCardShuffleSound();
      }
    }
  };

  return (
    <>
      <Header />
      <main
        className="min-h-screen pb-8 flex flex-col 
    justify-between items-center pt-16 pt-20 md:pt-24 font-courier-prime"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="shadow-medium flex flex-wrap justify-center">
              <Counter count={remainingCards.length} label="Cards left" />
              <Counter count={acesLeft} label={acesLeft === 1 ? 'Ace left' : 'Aces left'} />
            </div>
            {status === GameStatus.WON && (
              <WinBanner
                role="img"
                aria-labelledby="winBannerTitle winBannerDesc"
                className="max-w-full mb-8"
              >
                <title id="winBannerTitle">Winner</title>
                <desc id="winBannerDesc">Congratulations, you have won the game!</desc>
              </WinBanner>
            )}
          </div>
          {/* TODO: should we show confetti for people who have reduced motion turned on? */}
          <Confetti active={status === GameStatus.WON} config={confettiConfig} />
        </div>

        <div className="mb-4">
          <Cards cardsToShow={cardsToShow} />
        </div>

        {status === GameStatus.LOST && (
          <p className="text-4xl font-normal text-white text-center">
            You lose.
            <br />
            Better luck next time!
          </p>
        )}

        {status === GameStatus.DEAL && (
          <div className="flex flex-col items-center w-9/12">
            <div className="mb-4">
              <PrimaryButton onClick={dealCards}>Deal</PrimaryButton>
            </div>
            <div className="xl:self-end">
              <SecondaryButton onClick={resetGame}>Reset</SecondaryButton>
            </div>
          </div>
        )}

        {(status === GameStatus.LOST || status === GameStatus.WON) && (
          <div className="mb-8">
            <SecondaryButton onClick={resetGame}>Play again</SecondaryButton>
          </div>
        )}
      </main>
    </>
  );
};
