import { useState ,useEffect} from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() {
  

  const [todos,setTodos] = useState([])
  const [todoValue,setTodoValue]=useState('')



  function persistent(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))

  }

  function handleAddTodo(newTodo) {
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
    persistent(newTodoList)
  } 

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index 
    })
    persistent(newTodoList)
    setTodos(newTodoList)
    
  } 
  

  function handleEditTodo(index){
    const newTodo = todos[index]
    setTodoValue(newTodo)
    handleDeleteTodo(index)

  }


  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodo=localStorage.getItem('todos')
    if(!localTodo){
      return
    }

    localTodo=JSON.parse(localTodo).todos
    setTodos(localTodo)


  },[])


  return (
    <main className="app">

      <Todoinput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <Todolist todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      
    </main>
  )
}

export default App
