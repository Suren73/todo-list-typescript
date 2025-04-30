import { JSX, useEffect, useState } from 'react'
import styles from './App.module.css'
import { LoadingOverlay, TodoList } from './components'
import { API_URL } from './constants'
import { fetchRequest } from './utils'

export interface Todo {
	id: number
	userId: number
	title: string
	completed: boolean
}

export interface TodoListProps {
	todos: Todo[]
}

function App(): JSX.Element {
	const [todos, setTodos] = useState<Todo[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(function () {
		setIsLoading(true)

		fetchRequest(API_URL)
			.then(function (data) {
				setTodos(data)
				console.log('data', data)
			})
			.catch(function (error) {
				setError(error.message)
			})
			.finally(function () {
				setIsLoading(false)
			})
	}, [])

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список дел:</h1>
			{isLoading && <LoadingOverlay />}
			{error && <div className={styles.error}>{error}</div>}
			<TodoList todos={todos} />
		</div>
	)
}

export default App
