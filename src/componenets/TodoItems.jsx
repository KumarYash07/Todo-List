import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ addItem, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {addItem.map((item) => (
        <TodoItem
          key={item.name}
          item={item.name}
          date={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
