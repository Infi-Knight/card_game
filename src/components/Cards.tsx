import { motion } from 'framer-motion';
import * as React from 'react';
import { Card } from 'components/card';
import { Card as CardType } from 'types';

type CardsProps = {
  cardsToShow: CardType[];
};
export const Cards = ({ cardsToShow }: CardsProps): JSX.Element => {
  return (
    <div>
      <motion.ul data-testid="cards" className="flex flex-wrap justify-center items-center">
        {cardsToShow.map((card, i) => {
          return <Card cardIndex={i} card={card} key={`${card.rank + card.suit}`} />;
        })}
      </motion.ul>
    </div>
  );
};
