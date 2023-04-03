import debounce from "lodash/debounce";
import { useEffect, useMemo } from "react";

interface Props<F extends (...args: any[]) => any> {
  callback: F;
  wait: number;
  options?: Parameters<typeof debounce>[2];
}

const useDebounce = <F extends (...args: any[]) => any>({
  callback,
  wait,
  options,
}: Props<F>) => {
  const debouncedCallback = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useEffect(() => {
    return () => debouncedCallback.cancel();
  }, [debouncedCallback]);

  return debouncedCallback;
};

export default useDebounce;
