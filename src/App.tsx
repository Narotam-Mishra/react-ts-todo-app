import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react";
import { getTodosLocal, saveTodosLocal } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(
    getTodosLocal()
  );

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    // alert(id);
    const newTodo: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    })
    // console.log(newTodo);
    setTodos(newTodo);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    // alert(id);
    const delTodo: TodoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(delTodo);
  };

  const editHandler = (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ): void => {
    const editedTodo: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.title = newTitle;
      return i;
    })
    setTodos(editedTodo);
  }; 

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.floor(Math.random() * 10000)),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  }

  useEffect(() => {
    saveTodosLocal(todos);
  }, [todos])
  
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{textAlign: "center", flexGrow: 1}}>TS Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"70%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            key={i.id}
            todo={i}
            editHandler={editHandler}
          />
        ))}
      </Stack>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
        onKeyDown={(e) => {
          if(e.key === "Enter" && title !== "") submitHandler();
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: "1rem 0",
          padding: "0.75rem 0",
        }}
        onClick={submitHandler}
        disabled={title === ""}
      >
        Add
      </Button>
    </Container>
  );
}

export default App;
