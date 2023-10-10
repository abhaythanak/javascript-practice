import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../../Features/Todo/TodoSlice"

export default function TodoList() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
           <form onSubmit={addTodoHandler}>
            <input 
            placeholder="Enter a Todo..."
            type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button type="submit">
                Add Todo
            </button>
           </form>
        </>
    )
}
