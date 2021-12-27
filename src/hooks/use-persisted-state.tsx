import * as React from 'react';

// React hook which works similar to useState except the state is kept in sync with
// local storage.
// NOTE: the state is not reactive across browser tabs/windows
export const defaultValueToStore = '';
export default function useLocalStorageState(
  key: string,
  defaultValue?: unknown,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [state: unknown, setState: React.Dispatch<unknown>] {
  let valueToStore = defaultValue;
  if (valueToStore === undefined) {
    valueToStore = defaultValueToStore;
  }
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof valueToStore === 'function' ? valueToStore() : valueToStore;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [serialize, key, state]);

  return [state, setState];
}
