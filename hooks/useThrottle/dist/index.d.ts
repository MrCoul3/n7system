import _ from "lodash";
export declare function useThrottle(cb: (...args: string[]) => void, delay: number): _.DebouncedFunc<(...args: any) => void>;
