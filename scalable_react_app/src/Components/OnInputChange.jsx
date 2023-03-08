import React, { useState } from "react"

const OnInputChange = () => {
    const [data, setData] = useState('')
    const onChange = (event) => {
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

export { OnInputChange }