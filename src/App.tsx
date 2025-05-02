import styles from './App.module.css'
import { Overlay, TodoItem } from './components'
import { useRequestGetTodos } from './hooks'

export type Todo = {
	id: number
	userId: number
	title: string
	completed: boolean
}

const App = () => {
	const { todos, isLoading, error, isError } = useRequestGetTodos()

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список дел:</h1>
			{isLoading && <Overlay />}

			{isError && <div className={styles.error}>{error}</div>}

			<ul className={styles.list}>
				<TodoItem todos={todos} />
			</ul>
		</div>
	)
}

export default App
