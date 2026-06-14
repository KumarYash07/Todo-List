import AppName from "./componenets/AppName";
import AddTodo from "./componenets/AddTodo";
import TodoItems from "./componenets/TodoItems";
import "./App.css";
import { useState } from "react";
import WelconeMessage from "./componenets/WelcomeMessage";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "11/06/2026",
    },
    {
      name: "Go to college",
      dueDate: "12/06/2026",
    },
    {
      name: "Like video",
      dueDate: "12/06/2026",
    },
    
  ];

  let [addItem, setAddItem] = useState(todoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} : ${itemDueDate}`);
    const newtodoItems = [...addItem, {name: itemName, dueDate: itemDueDate}]
    setAddItem(newtodoItems);
  };

  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems = addItem.filter(item => item.name !== todoItemName);
    setAddItem(newTodoItems);
    // console.log(`Item Delete: ${todoItemName}`);
  }

  return (
    <center className="Todo-container">
      <AppName></AppName>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      {addItem.length === 0 && <WelconeMessage></WelconeMessage>}
      <TodoItems addItem = {addItem} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
