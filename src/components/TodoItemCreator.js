import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atom/TodoAtoms'

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const addItem = () => {
    setTodoList(oldTodoList => [
        ...oldTodoList,
        {
          id : getId(),
          text:inputValue,
          isComplete: false
        }
      ])
      setInputValue('')
  }

  return (
    <div>
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={addItem}>Add </button>
    </div>
  )
}

let id = 0;
function getId(){
  return id++;
}

export default TodoItemCreator