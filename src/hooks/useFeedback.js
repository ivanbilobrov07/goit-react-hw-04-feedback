import { useState } from 'react';

export const useFeedback = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  const setValue = () => {
    setState(state => state + 1);
  };

  return [state, setValue];
};
