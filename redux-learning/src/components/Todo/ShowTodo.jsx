import {useDispatch, useSelector} from 'react-redux'
import { removeTodo } from '../../Features/Todo/TodoSlice'

export default function ShowTodo() {
  const todos = useSelector((state)=> state.todos)
  const dispatch = useDispatch()
  console.log(todos)

    return(
        <div className="">
            {
                todos.map((todo) =>(
                    <div className="" key={todo.id}>
                    <li key={todo.id}> {todo.text}</li>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>delete</button>
                    </div>
                    
                ))
            }
        </div>
    )
}
