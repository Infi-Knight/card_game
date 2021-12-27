import * as React from 'react';
import { SoundToggle } from 'components/SoundToggle';

export function Header(): JSX.Element {
  return (
    <header>
      <nav className="w-full fixed flex justify-end p-2 xs:p-4 mb-4">
        <SoundToggle />
      </nav>
    </header>
  );
}
