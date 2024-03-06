import React from "react"
import { Todo } from "../../types/TodoTypes"
import { List, Card, Typography } from "antd"

interface TaskProps {
  index: number
  todo: Todo
  onToggle: () => void
}

const { Text, Title } = Typography

const Task: React.FC<TaskProps> = ({ todo, onToggle }) => {
  return (
    <List.Item onClick={onToggle} style={{cursor: "pointer"}}>
      <Card bordered>
        <Title level={4}>{todo.text}</Title>
        <Text code>
          IS COMPLETE: {todo.completed ? <Text type='success'>YES</Text> : <Text>NO</Text>}
        </Text>
      </Card>
    </List.Item>
  )
}

export default Task
