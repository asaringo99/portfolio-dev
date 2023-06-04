import React, { FC } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
    height?: string
    width?: string
    padding?: string
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ height, width, padding, children }) => {
    const divStyle = {
        height: height,
        width: width,
        padding: padding,
    };

    return (
        <div style={divStyle} className={styles.container}>{ children }</div>
    )
}


export default Container
