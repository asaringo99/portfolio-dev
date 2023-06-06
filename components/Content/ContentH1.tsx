import React, { FC } from 'react'
import styles from './ContentH1.module.css'

interface ContentH1Props {
    content: string
}

const ContentH1: FC<ContentH1Props> = ({ content }) => (
    <div className={styles.container}>{ content }</div>
)

export default ContentH1
