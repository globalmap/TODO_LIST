import React, { useState } from "react"
import { Button, Input, Space } from "antd"

interface TodoFormProps {
  onAdd: (text: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [inputText, setInputText] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value)
  }

  const handleAddTodo = (
    e:
    React.FormEvent<HTMLFormElement>
    | React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    e.preventDefault()

    if (inputText.trim() !== "") {
      onAdd(inputText)
      setInputText("")
    }
  }

  return (
    <form onSubmit={handleAddTodo} style={{ padding: "1rem 0" }}>
      <Space.Compact style={{ width: "100%" }}>
        <Input value={inputText} onChange={handleInputChange} />
        <Button type='primary' onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Space.Compact>
    </form>
  )
}

export default TodoForm
