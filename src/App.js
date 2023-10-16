import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState, todoListState } from './atom/TodoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  console.log(filteredTodoList)
  return (
      <div>
        <TodoListStats />
        <TodoListFilters/>
        <TodoItemCreator/>
        {filteredTodoList.map(todoItem=><TodoItem key={todoItem.id} item={todoItem}></TodoItem>)}
      </div>
  );
}

export default App;
