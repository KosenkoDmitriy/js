import { useCallback, useMemo } from 'react'

function UseMemoComponent() {
    const result = useMemo(() => {
        return 2 + 2
    }, [])

    const values = [9,2,7,4,6]
    const sortedValues = () => {
        console.log('sortedValues')
        return values.sort().join(', ') 
    }

    const sortedValuesWithMemo = useMemo(() => {
        console.log('sortedValuesWithMemo')
        return values.sort().join(', ') 
    }, [])

    const sortedValuesWithCallback = useCallback(() => {
        console.log('sortedValuesWithCallback')
        return values.sort().join(', ') 
    }, [])

    return (
        <>
            <h1>useMemo (react hook) </h1>
            <p>unsorted values: {values.join(', ')}</p>
            <p>sorted values (): {sortedValues()} </p>
            <p>sorted values (with memo): {sortedValuesWithMemo} </p>
            <p>sorted values (with callback): {sortedValuesWithCallback()} </p>

            <p>2 + 2 = {result}</p> 
            <p>1 + 3 = {result}</p>
        </>
    )
}

export { UseMemoComponent }