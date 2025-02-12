import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state for editing
  const [isEditing, setIsEditing] = useState(null); //  Stores the id of the todo that's currently being edited. null means no todo is being edited.
  const [updatedText, setUpdatedText] = useState(''); // Stores the new text value while editing a todo.

  // 📝 Button pe click hone par
  const startEditing = (id, currentText) => {
    setIsEditing(id);
    setUpdatedText(currentText);
  };

  // onclick on save button
  const saveUpdate = (id) => {
    if (updatedText.trim() !== '') {
      dispatch(updateTodo({ id, newText: updatedText }));
      setIsEditing(null);
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Conditional Rendering */}
            {isEditing === todo.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="bg-gray-800 rounded border border-gray-700 text-gray-100 py-1 px-3"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="space-x-3">
              {/* 📝 Button for Edit */}
              {isEditing === todo.id ? (
                <button
                  onClick={() => saveUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(todo.id, todo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  📝
                </button>
              )}

              {/* 🗑️ Button for Delete */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
