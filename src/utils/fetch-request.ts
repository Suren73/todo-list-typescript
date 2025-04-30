import { Todo } from '../App'

export async function fetchRequest(URL: string, options?: RequestInit): Promise<Todo[]> {
	const response = await fetch(URL, options)

	if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

	const data: Todo[] = await response.json()

	return data
}
