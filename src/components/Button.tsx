import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';

type ButtonProps = HTMLMotionProps<'button'>;
export const Button = ({ children, ...restProps }: ButtonProps): JSX.Element => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...restProps}
    >
      {children}
    </motion.button>
  );
};

export const PrimaryButton = ({ children, ...restProps }: ButtonProps): JSX.Element => {
  return (
    <Button
      className="font-alfa-slab-one bg-dark-yellow px-14 pt-2 pb-1 text-6xl rounded-xl focus:outline-white"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export const SecondaryButton = ({ children, ...restProps }: ButtonProps): JSX.Element => {
  return (
    <Button
      className="font-alfa-slab-one text-dark-yellow bg-transparent border-2 border-dark-yellow px-8 py-2 text-2xl rounded-xl focus:outline-white"
      {...restProps}
    >
      {children}
    </Button>
  );
};
