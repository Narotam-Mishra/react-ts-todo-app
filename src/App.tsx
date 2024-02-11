import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      title: "Abc",
      isCompleted: false,
      id: "nbwer"
    },
    {
      title: "Abc",
      isCompleted: false,
      id: "nbwer"
    },
  ]);
  const [title, setTitle] = useState<TodoItemType["title"]>("");
  
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>TS Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} />
        ))}
      </Stack>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: "1rem 0",
          padding: "0.75rem 0",
        }}
        disabled={title === ""}
      >
        Add
      </Button>
    </Container>
  );
}

export default App
