import { useState, useEffect, useReducer, useMemo } from 'react'

const todoInitState = [
    {
        id: 1,
        title: 'Todo 1',
        isCompleted: true
    }, 
    {
        id: 2,
        title: 'Todo 2',
        isCompleted: false,
    }
]

interface Todo {
    id: number,
    title: string,
    isCompleted: boolean
}

interface TodoAction {
    id: number,
    type: string,
    value: boolean
}

function reducer(state: any, action: TodoAction) {
    // console.log('reducer before switch', 'state', state, 'action', action)

    switch (action.type) {
        case "completed":
            return state.map((todo: Todo) => {
                if (todo.id === action.id) {
                    return {...todo, isCompleted: action.value }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}


function TodoComponent() {
    const [todos, dispatch] = useReducer(reducer, todoInitState)
    // useEffect(() => {
    //     dispatch({type: 'useEffect default'})
    // })
    const handleIsCompleted = (e: any, todo: Todo) => {
        console.log('handle completed', todo)
        dispatch({ type: "completed", id: todo.id, value: e.target.checked })
    }
    return (
        <>
            <h1>Todos: count = {todos.length} </h1>
            {todos.map((todo: Todo) => {
                return <div key={`todo${todo.id}`}>
                    <label>
                        {todo.title}
                        <input type='checkbox' 
                            checked={todo.isCompleted}
                            onChange={(e) => handleIsCompleted(e, todo)}
                        />
                    </label>
                </div>
            })}
        </>
    )
}

const counterInitState = {count: 0}
function counterReducer(state: any, action: any) {
    switch(action.type) {
        case '+':
            return { count: state.count + action.value }
        case '-':
            return { count: state.count - action.value }
        default:
            return state
    }
}

function CounterComponent() {
    const [state, dispatch] = useReducer(counterReducer, counterInitState)
    const counterIncrement = () => {
        dispatch({type: '+', value: 1})
    }
    const counterDecrement = () => {
        dispatch({type: '-', value: 1})
    }
    return (
        <>
            <h1>Counter {state.count} </h1>
            <button onClick={counterIncrement} >+</button>
            <button onClick={counterDecrement} >-</button>
        </>
    )
}


export {TodoComponent, CounterComponent}
