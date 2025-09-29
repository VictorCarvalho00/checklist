import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = 'todos';

export function TodoProvider({ children }) {

    const saveTodos = localStorage.getItem(TODOS)

    const [todos, setTodos] = useState(saveTodos ? JSON.parse(saveTodos) : [])

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

    const addTodo = (formData) => {
        const description = formData.get("description")
        setTodos(prevState => {
            const todo = {
                id: prevState.length + 1,
                description: description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, todo]
        })
    }

    const toggleTodoCompleted = (todo) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id == todo.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }

    const deleteTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id != todo.id)
        })
    }

    return (
        <TodoContext
            value={{
                todos,
                addTodo,
                toggleTodoCompleted,
                deleteTodo
            }}>
            {children}
        </TodoContext>
    )

}