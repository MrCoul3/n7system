import { useRef, useEffect, useCallback } from 'react';
import _ from 'lodash-es';

function useThrottle(cb, delay) {
  var options = {
    leading: true,
    trailing: false
  };
  var cbRef = useRef(cb);
  useEffect(function () {
    cbRef.current = cb;
  });
  return useCallback(_.throttle(function () {
    return cbRef.current.apply(cbRef, arguments);
  }, delay, options), [delay]);
}

export { useThrottle };
//# sourceMappingURL=n7-usethrottle.esm.js.map
