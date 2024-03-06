import React from "react"
import { Typography } from "antd"

const { Text } = Typography

const Counter: React.FC<{ completeCount: number, uncompleteCount: number }> = ({
  completeCount,
  uncompleteCount,
}) => {
  return (
    <Text keyboard ellipsis>
      Completed: {completeCount}; Uncompleted Count: {uncompleteCount}
    </Text>
  )
}

export default Counter
