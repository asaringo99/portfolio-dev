import React, { FC } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
    id?: string
    height?: string
    width?: string
    padding?: string
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ id, height, width, padding, children }) => {
    const divStyle = {
        height: height,
        width: width,
        padding: padding,
    };

    return (
        <div id={`${id ? id : ''}`} style={divStyle} className={styles.container}>{ children }</div>
    )
}


export default Container
