import React, {FC} from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({todo}: TodoItemProps) => {
  return (
    <div style={{textDecoration: todo.completed ? 'line-through' : 'underline'}}>
      <input type='checkbox' checked={todo.completed} />
      {todo.id} {todo.title}      
    </div>
  )
}

