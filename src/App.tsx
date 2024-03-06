import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ConfigProvider } from "antd"
import TodoList from "./components/TodoList/TodoList"
import TodoForm from "./components/TodoForm/TodoForm"
import FilterOptions from "./components/FilterOptions/FilterOptions"
import Header from "./components/Header/Header"
import Counter from "./components/Counter/Counter"
import {
  addTodo,
  getCounterTodos,
  selectFilter,
  selectTodos,
  setFilter,
  toggleTodo,
} from "./features/todo/todoSlice"
import { Todo } from "./types/TodoTypes"
import { customizeRenderEmpty } from "./commom/components/RenderEmpty/RenderEmpty"

const App: FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const currentFilter = useSelector(selectFilter)
  const counterTodos = useSelector(getCounterTodos)

  const handleAddTodo = (text: string): void => {
    dispatch(addTodo(text))
  }

  const handleToggleTodo = (id: number): void => {
    dispatch(toggleTodo(id))
  }

  const handleFilterChange = (
    filter: "all" | "completed" | "current",
  ): void => {
    dispatch(setFilter(filter))
  }

  const filteredTodos = (): Todo[] => {
    switch (currentFilter) {
      case "completed":
        return todos.filter((todo) => todo.completed)
      case "current":
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }
  }

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Header title='Todo List' />
      <Row gutter={16} justify='space-between' align='middle'>
        <Col className='gutter-row' span={6}>
          <FilterOptions onFilterChange={handleFilterChange} />
        </Col>
        <Col className='gutter-row'>
          <Counter
            completeCount={counterTodos.completeCount}
            uncompleteCount={counterTodos.uncompleteCount}
          />
        </Col>
      </Row>
      <div></div>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={filteredTodos()} onToggle={handleToggleTodo} />
    </ConfigProvider>
  )
}

export default App
