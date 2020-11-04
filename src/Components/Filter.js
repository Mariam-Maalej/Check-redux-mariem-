import React, { useEffect} from 'react'

const Filter = ({setFilterList, todoList, status, setStatus}) => {

  const filterTodo=()=>{
    switch(status){
      case "ALL" : return setFilterList(todoList)
      case "DONE" : return setFilterList(todoList.filter(todo=>todo.isDone===true))
      case "UNDONE" : return setFilterList(todoList.filter(todo=>todo.isDone===false))
      default : return todoList;
    }
  }
  useEffect(() => {
    filterTodo()
  }, [status,todoList])
  return (
    <div>
      <button className="all" onClick={()=>setStatus("ALL")}>Show All</button>
      <button className="done" onClick={()=>setStatus("DONE")}>Done</button>
      <button className="undone" onClick={()=>setStatus("UNDONE")}>Undone</button>
    </div>
  )
}

export default Filter

