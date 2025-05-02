import styles from './Overlay.module.css'

export const Overlay = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.spinner}></div>
			<div className={styles.message}>Пожалуйста, подождите ...</div>
		</div>
	)
}
