import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState } from './TodoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './userAtoms';
import React from 'react';

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  console.log(filteredTodoList)
  return (
      <div>
        <React.Suspense fallback={<div>...loading</div>}>
          <CurrentUserInfo/>
        </React.Suspense>
        
        <TodoListStats />
        <TodoListFilters/>
        <TodoItemCreator/>
        {filteredTodoList.map(todoItem=><TodoItem key={todoItem.id} item={todoItem}></TodoItem>)}
      </div>
  );
}

function CurrentUserInfo(){
  const userName = useRecoilValue(currentUserNameQuery)
  return <div>{userName}</div>
}

export default App;
