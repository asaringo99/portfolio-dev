import React, { FC } from 'react'
import styles from './Occupation.module.css'

interface OccupationProps {
    content: string
}

const Occupation: FC<OccupationProps> = ({ content }) => (
    <div className={styles.container}>{ content }</div>
)

export default Occupation
