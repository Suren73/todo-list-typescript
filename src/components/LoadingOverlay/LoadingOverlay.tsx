import { JSX } from 'react'
import styles from './LoadingOverlay.module.css'

export function LoadingOverlay(): JSX.Element {
	return (
		<div className={styles.overlay}>
			<div className={styles.spinner}></div>
			<div className={styles.message}>Пожалуйста, подождите...</div>
		</div>
	)
}
