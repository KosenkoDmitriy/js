import React, { useState, useRef } from "react"

const OnInputChange = () => {
    const [data, setData] = useState('')
    const onChange = (event: any) => {
        setData(event.target.value)
        console.log(data)
    }
    const [userName, setUserName] = useState<string>('')
    // const onUserNameChange(name) {
    //     setUserName(name)
    //     console.log(name)
    // }
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

export { OnInputChange, RefInput }