'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var _ = _interopDefault(require('lodash'));

var InfiniteList = function InfiniteList(props) {
  var dataLength = props.dataLength;
  var wrap = React.useRef(null);

  var _useState = React.useState(),
      delta = _useState[0],
      setDelta = _useState[1];

  function useThrottle(cb, delay) {
    var options = {
      leading: true,
      trailing: false
    };
    var cbRef = React.useRef(cb);
    React.useEffect(function () {
      cbRef.current = cb;
    });
    return React.useCallback(_.throttle(function () {
      return cbRef.current.apply(cbRef, arguments);
    }, delay, options), [delay]);
  }

  var throttleLoadMore = useThrottle(function () {
    return props.loadMore(dataLength);
  }, 500);
  React.useEffect(function () {
    var wrapCurrent = wrap.current;
    setDelta(+(wrapCurrent == null ? void 0 : wrapCurrent.clientHeight) - +(wrapCurrent == null ? void 0 : wrapCurrent.scrollHeight));
  }, []);
  React.useEffect(function () {
    var wrapCurrent = wrap.current;

    if (delta !== undefined && (wrapCurrent == null ? void 0 : wrapCurrent.clientHeight) - (wrapCurrent == null ? void 0 : wrapCurrent.scrollHeight) === 0 && dataLength !== 0) {
      props.loadMore(dataLength);
    }
  }, [delta, props.dataLength]);

  function handleScroll(e) {
    var element = e.target;
    var countLimit = props.countLimit ? props.countLimit : 0;
    var scrollBottom = element.scrollHeight - element.offsetHeight - element.scrollTop;

    if (dataLength < countLimit) {
      if (Math.floor(scrollBottom) <= 0) {
        throttleLoadMore();
      }
    }
  }

  return React__default.createElement("div", {
    ref: wrap,
    onScroll: handleScroll,
    style: {
      minWidth: props.minWidth,
      maxHeight: props.maxHeight,
      overflowY: 'scroll'
    }
  }, props.children);
};

exports.InfiniteList = InfiniteList;
//# sourceMappingURL=n7-react-infinitelist.cjs.development.js.map
