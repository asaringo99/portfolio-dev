import React, { FC } from "react";
import styles from './Icon.module.css'

interface IconProps {
    uri: string
}

const Icon: FC<IconProps> = ({ uri }) => {
    return (
        <div className={styles.container}>
            <img src={uri} className={styles.icon}/>
        </div>
    )
}

export default Icon