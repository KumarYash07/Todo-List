import { MdDelete } from "react-icons/md";
function TodoItem({ item, date, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row item-row">
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger item-btn"
            onClick={() => onDeleteClick(item)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
