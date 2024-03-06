import React from "react"
import { Todo } from "../../types/TodoTypes"

import { List } from "antd"
import Task from "../Task/Task"

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) =>
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={todos}
    renderItem={(item, index) =>
      <Task index={index} todo={item} onToggle={() => onToggle(item.id)} />
    }
  />

export default TodoList
