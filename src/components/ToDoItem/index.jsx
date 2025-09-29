import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";
import TodoContext from '../TodoProvider/TodoContext';
import { use } from 'react';

export function ToDoItem({ item }) {
    const { toggleCompleted, deleteTodo } = use(TodoContext)

    const styles = ['todo-item']

    if (item.completed) {
        styles.push('completed')
    }

    return (
        <li className={styles.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={item.completed}
                    onClick={() => toggleCompleted(item)}
                />
                <p className="description">
                    {item.description}
                </p>
                <div className="actions">
                    <button
                        className="btn"
                        onClick={() => deleteTodo(item)}
                    >
                        <IconTrash />
                    </button>
                    <button className="btn">
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}