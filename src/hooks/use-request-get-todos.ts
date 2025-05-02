import { useEffect, useState } from 'react'
import { Todo } from '../App'
import { API_URL } from '../constants'

type UseRequestGeyTodosResult = {
	todos: Todo[]
	isLoading: boolean
	error: string | null
	isError: boolean
}

export const useRequestGetTodos = (): UseRequestGeyTodosResult => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [error, setError] = useState<string | null>(null)
	const [isError, setIsError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)

		fetch(API_URL)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				return response.json()
			})
			.then((data: Todo[]) => setTodos(data))
			.catch(error => {
				setError(error.message)
				setIsError(true)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return {
		todos,
		isLoading,
		error,
		isError,
	}
}
