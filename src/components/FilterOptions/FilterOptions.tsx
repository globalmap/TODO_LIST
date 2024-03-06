import React from "react"
import { Select, Space } from "antd"

interface FilterOptionsProps {
  onFilterChange: (filter: "all" | "completed" | "current") => void
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  return (
    <Space wrap>
      <Select
        defaultValue='all'
        style={{ width: 120 }}
        onChange={onFilterChange}
        options={[
          { value: "all", label: "All" },
          { value: "completed", label: "Completed" },
          { value: "current", label: "Current" },
        ]}
      />
    </Space>
  )
}

export default FilterOptions