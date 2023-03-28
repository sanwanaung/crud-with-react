const Edit = ({ setAddText, value, setEditMode, setIsEdit }) => {
  const editTodoList = (value) => {
    setEditMode(true);
    setIsEdit(value.id);
    setAddText(value.todo);
  };
  return (
    <button className="_edit_btn" onClick={() => editTodoList(value)}>
      Edit
    </button>
  );
};

export default Edit;
