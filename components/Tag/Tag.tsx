import React, { FC } from 'react'
import styles from './Tag.module.css'

interface TagProps {
    platform: string
    content: string
    href: string
}

const Tag: FC<TagProps> = ({ platform, content, href }) => (
    <div className={styles.tag}>{ platform }{" : "}<a href={href}>{ content }</a></div>
)

export default Tag
