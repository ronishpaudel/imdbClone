import { useState, useEffect } from "react";

type ValueType = string;

const useDebounce = (value: ValueType, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleValueChange = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handleValueChange);
    };
  }, [value]);

  return debouncedValue;
};

export { useDebounce };
