import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = ()=> {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  }
  return (
    <div className="container text-center">
      <div className="row item-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter TODO here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          value={todoDate}
          onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success item-btn"
            onClick={handleAddButtonClick}
          >
            <IoMdAddCircle/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
