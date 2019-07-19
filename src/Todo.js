import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/CheckBox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({ task, completed}) {
  return(
    <ListItem>
      <CheckBox tabIndex={-1} checked={completed}/>
          <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
  );
}

export default Todo;
