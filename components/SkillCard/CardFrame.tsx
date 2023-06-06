import React, { FC } from 'react'
import styles from './CardFrame.module.css'

interface CardFrameProps {
    children: React.ReactNode
}

const CardFrame: FC<CardFrameProps> = ({ children }) => (
    <div className={styles.container}>{ children }</div>
)


export default CardFrame
