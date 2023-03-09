import { useMemo } from 'react'

function UseMemoComponent() {
    const result = useMemo(() => {
        return 2 + 2
    }, [])
    
    return (
        <>
            <h1>useMemo (react hook) </h1>
            <p>2 + 2 = {result}</p>
            <p>1 + 3 = {result}</p>
        </>
    )
}

export { UseMemoComponent }