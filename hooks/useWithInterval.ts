import { useEffect } from "react";

const DEFAULT_DELAY = 75;

type Props = {
  callback: VoidFunction;
  delay?: number;
};

export const useWithInterval = ({ callback, delay = DEFAULT_DELAY }: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, delay);

    return () => clearInterval(interval);
  });
};
