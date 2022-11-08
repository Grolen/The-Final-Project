import React from 'react'
import { Select } from 'antd'

const DropDown = ({ placeholder, options }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  return (
    <Select
      style={{ width: 300 }}
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={options.map((option) => {
        return {
          value: option.value,
          label: option.label,
        }
      })}
    />
  )
}

export default DropDown
