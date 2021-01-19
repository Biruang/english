import React, { useEffect, useRef } from "react";
import { HookCallbacks} from "async_hooks";

const usePrevious = (value: React.ReactNode) => {
    const prevChildrenRef = useRef();

    useEffect(() => {
        // @ts-ignore
        prevChildrenRef.current = value;
    }, [value]);

    return prevChildrenRef.current;
};

export default usePrevious;
