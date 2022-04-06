'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var _ = _interopDefault(require('lodash'));

function useThrottle(cb, delay) {
  var options = {
    leading: true,
    trailing: false
  };
  var cbRef = react.useRef(cb);
  react.useEffect(function () {
    cbRef.current = cb;
  });
  return react.useCallback(_.throttle(function () {
    return cbRef.current.apply(cbRef, arguments);
  }, delay, options), [delay]);
}

exports.useThrottle = useThrottle;
//# sourceMappingURL=n7-usethrottle.cjs.development.js.map
