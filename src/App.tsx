import * as React from 'react';
import { Game } from 'components/game';
import { ConfigProvider } from 'context/ConfigContext';

const App = (): JSX.Element => {
  return (
    <ConfigProvider>
      <Game />
    </ConfigProvider>
  );
};

export default App;
