import React, { useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';

interface IProps {
  children?: string | React.ReactNode;
  loadMore(dataLength: number): void;
  countLimit: number | null;
  dataLength: number;
  minWidth?: string;
  maxHeight?: string;
}

export const InfiniteList = (props: IProps) => {
  const dataLength = props.dataLength;
  const wrap = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState<number>();

  function useThrottle(cb: any, delay: number) {
    const options = { leading: true, trailing: false };
    const cbRef = useRef(cb);
    useEffect(() => {
      cbRef.current = cb;
    });
    return useCallback(
      _.throttle((...args) => cbRef.current(...args), delay, options),
      [delay]
    );
  }
  const throttleLoadMore = useThrottle(() => props.loadMore(dataLength), 500);

  useEffect(() => {
    const wrapCurrent = wrap.current as HTMLDivElement;
    setDelta(+wrapCurrent?.clientHeight - +wrapCurrent?.scrollHeight);
  }, []);

  useEffect(() => {
    const wrapCurrent = wrap.current as HTMLDivElement;
    if (
      delta !== undefined &&
      wrapCurrent?.clientHeight - wrapCurrent?.scrollHeight === 0 &&
      dataLength !== 0
    ) {
      props.loadMore(dataLength);
    }
  }, [delta, props.dataLength]);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const element = e.target as HTMLDivElement;
    const countLimit = props.countLimit ? props.countLimit : 0;
    let scrollBottom =
      element.scrollHeight - element.offsetHeight - element.scrollTop;
    if (dataLength < countLimit) {
      if (Math.floor(scrollBottom) <= 0) {
        throttleLoadMore();
      }
    }
  }
  return (
    <div
      ref={wrap}
      onScroll={handleScroll}
      style={{
        minWidth: props.minWidth,
        maxHeight: props.maxHeight,
        overflowY: 'scroll',
      }}
    >
      {props.children}
    </div>
  );
};
