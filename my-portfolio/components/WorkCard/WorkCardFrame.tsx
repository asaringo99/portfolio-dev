import React, { FC } from 'react'
import styles from './WorkCardFrame.module.css'

interface WordCardFrameProps {
    children: React.ReactNode
}

const WordCardFrame: FC<WordCardFrameProps> = ({ children }) => (
    <div className={styles.container}>{ children }</div>
)


export default WordCardFrame
