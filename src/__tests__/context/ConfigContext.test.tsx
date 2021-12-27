import { renderHook, act } from '@testing-library/react-hooks';
import { ConfigProvider, useGameConfig, isSoundEnabledByDefault } from 'context/ConfigContext';

test('should allow updating app wide config settings', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ConfigProvider>{children}</ConfigProvider>
  );
  const { result } = renderHook(() => useGameConfig(), { wrapper });

  // check that default sound settings are properly initialised
  expect(result.current.soundEnabled).toBe(isSoundEnabledByDefault);
  expect(typeof result.current.setSoundEnabled).toBe('function');

  // should be able to change sound settings, for example disabling the sounds in this case
  act(() => {
    result.current.setSoundEnabled(false);
  });
  expect(result.current.soundEnabled).toBe(false);
});
