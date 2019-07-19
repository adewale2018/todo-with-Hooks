import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialTodos = [
    {id: 101, task: "Learn React Hooks", completed: false},
    {id: 102, task: "Watch Movies", completed: true},
    {id: 103, task: "Clean the House", completed: false}
  ]
  const[todos, setTodos] = useState(initialTodos);
  const addTodo = newTodo => {
    setTodos([...todos, {id: 104, task: newTodo, completed: true}]);
  }
  return(
    <Paper
    style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa"
    }}
    elevation={0}
    >
      <AppBar color="primary" position="static" style={{height: '64px'}}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos}/>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
