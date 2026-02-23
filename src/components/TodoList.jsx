import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, onEdit, filter }) {
  if (todos.length === 0) {
    const messages = {
      all: 'タスクがありません。上のフォームから追加してください。',
      active: '未完了のタスクはありません。',
      completed: '完了済みのタスクはありません。',
    }
    return (
      <div className="empty-state">
        <p>{messages[filter]}</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList
