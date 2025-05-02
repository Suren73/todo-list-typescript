import { Todo } from '../../App'
import styles from './TodoItem.module.css'

export const TodoItem = ({ todos }) => {
	return (
		<>
			{todos.map((todo: Todo) => (
				<li key={todo.id} className={styles.item}>
					<div>
						<input
							type='checkbox'
							className={styles.checkbox}
							checked={todo.completed}
							id={`checkbox-${todo.id}`}
							readOnly
						/>
						<label htmlFor={`checkbox-${todo.id}`} />
					</div>
					<span>{todo.title}</span>
				</li>
			))}
		</>
	)
}
