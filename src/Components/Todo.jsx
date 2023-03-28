import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Delete from "./Delete";
import Edit from "./Edit";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [addText, setAddText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isEdit, setIsEdit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addText === "") {
      return;
    }
    const task = {
      id: uuidv4(),
      todo: addText,
    };
    setAddText("");
    const newTodo = [...todoList, task];
    setTodoList(newTodo);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (addText === "") {
      return;
    }
    setEditMode(false);
    setTodoList(
      todoList.map((item) => {
        if (item.id === isEdit) {
          return { ...item, todo: addText };
        }
        return item;
      })
    );
    setAddText("");
  };

  return (
    <div className="_todo">
      {editMode ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="_todo_list">
        {todoList.map((item, index) => {
          return (
            <div className="_list_container" key={index}>
              <div className="_list">{item.todo}</div>
              <div className="_btn_box">
                <Edit
                  value={item}
                  setAddText={setAddText}
                  setEditMode={setEditMode}
                  setIsEdit={setIsEdit}
                  setTodoList={setTodoList}
                />
                <Delete
                  todoList={todoList}
                  setTodoList={setTodoList}
                  id={item.id}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
