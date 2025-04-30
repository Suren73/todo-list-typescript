import { Todo, TodoListProps } from '../../App'
import styles from './TodoItem.module.css'

export function TodoItem({ todos }: TodoListProps) {
	return (
		<>
			{todos.map(function (todo: Todo) {
				return (
					<li key={todo.id} className={styles.item}>
						{todo.title}
					</li>
				)
			})}
		</>
	)
}
