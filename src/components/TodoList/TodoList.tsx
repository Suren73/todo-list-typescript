import { TodoItem } from '../TodoItem/TodoItem'
import styles from './todoList.module.css'
import { TodoListProps } from '../../App'

export function TodoList({ todos }: TodoListProps) {
	return (
		<ul className={styles.list}>
			<TodoItem todos={todos} />
		</ul>
	)
}
