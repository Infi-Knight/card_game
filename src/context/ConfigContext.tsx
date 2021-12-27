/**
 * This context holds user configuration stuff, like:
 * - Sound enabled or disabled
 */
import React from 'react';
import useLocalStorageState from 'hooks/use-persisted-state';

export const SOUND_ENABLED_KEY = 'sound-enabled';
export const isSoundEnabledByDefault = true;

export type ConfigContextValueType = {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<boolean>;
};
export const ConfigContext = React.createContext({} as ConfigContextValueType);

type ConfigProviderProps = {
  children: React.ReactNode;
};
export const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
  const [soundEnabled, setSoundEnabled] = useLocalStorageState(
    SOUND_ENABLED_KEY,
    isSoundEnabledByDefault
  );

  const value = { soundEnabled, setSoundEnabled } as ConfigContextValueType;
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export function useGameConfig(): ConfigContextValueType {
  const context = React.useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
