import React from "react"


function useInterval(callback: any, delay: number) {
    const savedCallback = React.useRef<any>();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    React.useEffect(() => {
        function tick() {
            if (savedCallback && savedCallback.current)
                savedCallback.current();
        }
        const interval = setInterval(tick, delay);
        return () => clearInterval(interval);
    }, [delay])
}

export { useInterval }