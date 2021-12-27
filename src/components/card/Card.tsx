import { motion, Target, useReducedMotion } from 'framer-motion';
import * as React from 'react';
import { ReactComponent as CloverIcon } from 'assets/Clover.svg';
import { ReactComponent as DiamondIcon } from 'assets/Diamond.svg';
import { ReactComponent as HeartIcon } from 'assets/Heart.svg';
import { ReactComponent as SpadeIcon } from 'assets/Spade.svg';
import { Card as CardType, Suit } from 'types';

type CardProps = {
  card: CardType;
  cardIndex: number;
};

const getIconAndColorForSuit = (
  suit: Suit
): { color: string; IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } => {
  switch (suit) {
    case Suit.Clubs:
      return { color: 'text-black', IconComponent: CloverIcon };
    case Suit.Spades:
      return { color: 'text-black', IconComponent: SpadeIcon };
    case Suit.Diamonds:
      return { color: 'text-bright-red', IconComponent: DiamondIcon };
    case Suit.Hearts:
      return { color: 'text-bright-red', IconComponent: HeartIcon };
    default:
      throw new Error(`${suit} is not a valid Suit`);
  }
};

export const Card = ({ card: { rank, suit }, cardIndex }: CardProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();
  const { color, IconComponent } = getIconAndColorForSuit(suit);

  // If the user prefers reduced motion, only animate the opacity
  // the preference can be obtained using the shouldReduceMotion hook
  let initial: Target = {};
  let animate: Target = {};
  if (shouldReduceMotion) {
    initial = { opacity: 0 };
    animate = { opacity: 1 };
  } else {
    initial = { opacity: 0, translateY: `${cardIndex % 2 === 0 ? '-50%' : '50%'}` };
    animate = { opacity: 1, translateY: 0 };
  }
  return (
    <motion.li
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
      className="p-2 xl:p-4"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className="shadow-low hover:shadow-high bg-white w-24 h-32 xs:w-28 xs:h-36 rounded-xl mt-4 pl-4 pr-3 py-3 flex justify-between"
      >
        <div className="flex flex-col items-center">
          <span className={`text-4xl ${color} -ml-1`}>{rank}</span>
          <IconComponent className="h-4 w-4" />
        </div>
        <IconComponent className="h-12 w-12 self-end" />
      </motion.div>
    </motion.li>
  );
};
