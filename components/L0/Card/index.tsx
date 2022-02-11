import React from 'react'
import styles from './styles.module.scss'

export default ({
	className = '',
	name,
	link,
	image
}: {
	className?: string;
	name: string
	link: string
	image: string
}) => {
	return (
		<a href={link} className={`card ${className} ${styles["card"]}`}>
			<img 
				aria-describedby='decorative' 
				className={styles["card__image"]}
				src={image} 
			/>
			<p className={styles["card__name"]}>{name}</p>
		</a>
	)
}