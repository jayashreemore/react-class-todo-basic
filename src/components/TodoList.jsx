import Todo from "./Todo";

export default function TodoList({
    todos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodoText
}) {
    return (
        <>
            <h1>This is Todo List</h1>
            <h1>Create Todo</h1>
            <input
                type="text"
                onKeyDown={(e) => {
                    e.key === 'Enter' && addTodo(e);
                }}
            />

            {todos.length ? (
                <>
                <h1>Todo Items</h1>
                <ul>
                    {todos
                    .filter((i) => !i.completed)
                    .map((todo) => {
                        return(
                            <Todo
                                key={todo.id}
                                todo={todo}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                                editTodoText={editTodoText}
                            />
                        )
                    })}

                </ul>
                <h1>Completed Items</h1>
                <ul>
                    {todos
                    .filter((i) => i.completed)
                    .map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                                editTodoText={editTodoText}
                            />                            
                        )
                    })

                    }
                </ul>
                </>
            ) : (
                <h1>No Todos Added Yet</h1>
            )}

            </>
    )
}