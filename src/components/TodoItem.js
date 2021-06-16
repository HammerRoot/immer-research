import React, { useMemo } from 'react'

const TodoItem = props => {
  const { onClick, id, text, completed } = props

  const handleClick = () => {
    onClick(id)
  }

  const styles = useMemo(() => {
    return completed
      ? {
          textDecoration: 'line-through',
          color: 'grey',
        }
      : {}
  }, [completed])

  return (
    <li onClick={handleClick} style={styles}>
      {text}
    </li>
  )
}

export default TodoItem
