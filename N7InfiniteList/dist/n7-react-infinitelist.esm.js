import React, { useRef, useState, useCallback, useEffect } from 'react';
import _ from 'lodash-es';

var InfiniteList = function InfiniteList(props) {
  var dataLength = props.dataLength;
  var wrap = useRef(null);

  var _useState = useState(),
      delta = _useState[0],
      setDelta = _useState[1];

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

  var throttleLoadMore = useThrottle(function () {
    return props.loadMore(dataLength);
  }, 500);
  useEffect(function () {
    var wrapCurrent = wrap.current;
    setDelta(+(wrapCurrent == null ? void 0 : wrapCurrent.clientHeight) - +(wrapCurrent == null ? void 0 : wrapCurrent.scrollHeight));
  }, []);
  useEffect(function () {
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

  return React.createElement("div", {
    ref: wrap,
    onScroll: handleScroll,
    style: {
      minWidth: props.minWidth,
      maxHeight: props.maxHeight,
      overflowY: 'scroll'
    }
  }, props.children);
};

export { InfiniteList };
//# sourceMappingURL=n7-react-infinitelist.esm.js.map
