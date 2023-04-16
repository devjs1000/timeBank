import React, {useEffect} from 'react';

const useAsyncMount = (fn: Function) => {
  useEffect(() => {
    fn();
  });
};

export default useAsyncMount;
