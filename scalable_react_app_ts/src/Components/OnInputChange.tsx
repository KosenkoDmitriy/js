import React, { useState, useRef, useEffect } from "react"

const OnInputChange = () => {
    const [data, setData] = useState('')
    const onChange = (event: any) => {
        setData(event.target.value)
        console.log(data)
    }
    const [userName, setUserName] = useState('')
    return <div>
        <input type='text' onChange={onChange} />
        <input type='text' onChange={(e) => setUserName(e.target.value)} />
    </div>
}

const RefInput = () => {
    const refInput = useRef<any>(null)

    const browseFile = () => {
        if (refInput.current) {
            refInput.current.click()
            console.log(refInput.current.value)
        }
    }

    return (
        <>
            <button onClick={browseFile}>Please click to select file</button>
            <input type='file' ref={refInput} 
             style={{ display: 'none' }} 
            />
        </>
    )
}

interface Todo {
    id: number;
    todo: string;
}
const UseEffectComponent = () => {
    // const [data, setData] = useState<Todo[]>([]) // cannot be used as a JSX component.
    //Its return type 'false | Element[]' is not a valid JSX element.
    //Type 'boolean' is not assignable to type 'ReactElement<any, any>'.
    
    const [data, setData] = useState<any>([])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then((data) => setData(data.todos))
        .catch(error => console.log(error.message))
    }, [])
    return (
        data.length > 0 && data.map((item: Todo) => {
            return <ul key='todos'>
                <li key={`todo${item.id}`}>{item.todo}</li>
            </ul>
        })
    )
}

export { OnInputChange, RefInput, UseEffectComponent }