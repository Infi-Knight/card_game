import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorageState, { defaultValueToStore } from 'hooks/use-persisted-state';

test('should use default value if only a key is provided', () => {
  const { result } = renderHook(() => useLocalStorageState('test-key'));
  const [value, dispatch] = result.current;
  expect(value).toBe(defaultValueToStore);
  expect(typeof dispatch).toBe('function');
});

test('should update the value in localStorage', () => {
  const { result } = renderHook(() => useLocalStorageState('test-key2', 'test-value'));
  expect(result.current[0]).toBe('test-value');

  act(() => {
    result.current[1]('test-value2');
  });

  expect(result.current[0]).toBe('test-value2');
});
