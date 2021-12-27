import * as React from 'react';

export type CounterProps = {
  count: number;
  label: string;
};
export const Counter = ({ count, label }: CounterProps): JSX.Element => {
  return (
    <div
      className="w-44 flex flex-col bg-black justify-center 
    items-center px-8 py-5 border border-yellow-300"
    >
      <span className="text-5xl text-white">{count}</span>
      <span className="text-white">{label}</span>
    </div>
  );
};
