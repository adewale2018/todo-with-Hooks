import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from './Hooks/UseInputState';

function TodoForm({ addTodo}) {
  const [value, handleChange, reset] = useInputState("");
  return(
    <Paper>
      <form onSubmit={e => {
          e.preventDefault();
          addTodo(value)
          reset();
        }}>
        <TextField
          value={value}
          onChange={handleChange}
          require="required"
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
