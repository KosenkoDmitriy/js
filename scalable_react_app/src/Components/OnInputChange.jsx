import React, { useState } from "react"

const OnInputChange = () => {
    const [data, setData] = useState('')
    const onChange = (event) => {
        setData(event.target.value)
        console.log(data)
    }
    return <input type='text' onChange={onChange} />
}

export { OnInputChange }