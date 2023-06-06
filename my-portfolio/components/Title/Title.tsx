import React, { FC } from 'react'
import styles from './Title.module.css'

interface TitleProps {
    title: string
}

const Title: FC<TitleProps> = ({ title }) => (
    <div className={styles.container}>{ title }</div>
)

export default Title
