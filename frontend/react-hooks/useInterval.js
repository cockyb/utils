import {useEffect, useRef} from 'react';

function useInterval(callback, delay) {
  const saved_callback = useRef();

  useEffect(() => {
    saved_callback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      saved_callback.current();
    }
    if (delay !== null || delay !== undefined) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  });
}

export default useInterval;
