# Card game

[Play now](https://blissful-bohr-58acd4.netlify.app/)



## Rules

1. There is a standard deck (52 cards of 4 suits: ♣ Clubs,
♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Pressing the "Deal" button deals you 5 random cards.
3. Within the same game, you never get the same cards
again that you got in the past (just like a physical deck).
4. There is a card counter which shows how many cards are dealt/left.
5. When all the cards have been dealt, Game Over. If no aces are left, Game Over.
6. If there is atleast one ace in the last draw, you Win, otherwise You Lose.

### Media and animations

- You can disable game sounds using the button in
 the top-right corner.
- You can disable card animations by enabling the
reduce motion setting on your browser/OS.

### Tech used

- React, TypeScript, Tailwind CSS
- framer/motion for managing animations
- joshwcomeau/use-sound: react hook for playing sound effects
- @testing-library/react,
@testing-library/react-hooks-testing-library,
 cypress for unit and e2e tests.

### TODO

- improve accessibility
- Add more tests
