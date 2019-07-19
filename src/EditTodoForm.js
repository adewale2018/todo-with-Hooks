import React from 'react';
import TextField from "@material-ui/core/TextField";
import useInputState from './Hooks/UseInputState';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const[value, handleChange, reset] = useInputState(task);
  return(
    <form onSubmit={(e)=> {
      e.preventDefault();
      editTodo(id,value);
      reset();
      toggleEditForm();
    }}
    style={{marginLeft: "1rem", width: "100%"}}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        autoFocus
        required
      />
    </form>
  );
}
export default EditTodoForm;
