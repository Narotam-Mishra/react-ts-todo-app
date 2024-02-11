import { Button, Checkbox, Paper, Typography } from "@mui/material";

type PropsType = {
    todo: TodoItemType;
};

const TodoItem = ( {todo}: PropsType) => {
  return (
    <Paper 
        variant="outlined" sx={{
        padding: "1rem",
    }}>
        <Typography>{todo.title}</Typography>
        <Checkbox />
        <Button>Edit</Button>
    </Paper>
  )
}

export default TodoItem;