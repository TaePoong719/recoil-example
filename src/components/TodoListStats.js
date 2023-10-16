import React from 'react'
import { useRecoilValue,  } from 'recoil'
import { todoListStatState } from '../TodoAtoms'

const TodoListStats = () => {
  const {
    totalNum, 
    totalCompletedNum,
    totalUncompletedNum, 
    percentCompleted
  } = useRecoilValue(todoListStatState)

  const formattedPerecentCompleted = Math.round(percentCompleted * 100)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items Completed {totalCompletedNum}</li>
      <li>Items not Completed {totalUncompletedNum}</li>
      <li>Percent Completed {formattedPerecentCompleted}</li>
    </ul>
  )
}

export default TodoListStats