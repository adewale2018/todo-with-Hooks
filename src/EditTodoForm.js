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
    }}>
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </form>
  );
}
export default EditTodoForm;
