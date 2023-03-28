const Delete = ({ todoList, setTodoList, id }) => {
  const handleDeleteItem = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };
  return (
    <button className="_delete_btn" onClick={() => handleDeleteItem(id)}>
      Delete
    </button>
  );
};

export default Delete;
