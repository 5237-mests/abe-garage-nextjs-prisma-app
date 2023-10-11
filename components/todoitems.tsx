'use client'

type TodoItemProps = {
  id: String
  title: String
  complete: boolean
  toggleTodo: (id: String, complete: boolean) => void
}

function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
       id={id}
       type="checkbox"
       className="cursor-pointer peer"
       defaultChecked={complete}
       onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
       htmlFor={id}
       className="peer-checked:line-through cursor-pointer"
      >
        {title}
      </label>
    </li>
  )
}

export default TodoItem