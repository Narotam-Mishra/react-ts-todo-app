
export const saveTodosLocal = (todos: TodoItemType[]): void => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
}

export const getTodosLocal = (): TodoItemType[] => {
    const savedTodos = localStorage.getItem("mytodos");

    return savedTodos ? JSON.parse(savedTodos) : [];
}