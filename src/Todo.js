import React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import  { Delete, Edit } from "@material-ui/icons";
import useToggler from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggler(false);
  return(
    <ListItem style={{height: "64px"}}>
      {isEditing ? 
      (<EditTodoForm 
        editTodo={editTodo} 
        id={id} 
        task={task}
        toggleEditForm={toggle}
        />) :( 
        <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
          <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={()=>removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
