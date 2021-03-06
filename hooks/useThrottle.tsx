import {useCallback, useEffect, useRef} from "react";
import _ from "lodash";

export function useThrottle(cb: (...args: string[]) => void, delay: number) {
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