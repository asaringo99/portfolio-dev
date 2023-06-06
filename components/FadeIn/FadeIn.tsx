import React, { FC, useState, useEffect } from "react";
import styles from './FadeIn.module.css'

interface FadeInProps {
    children: React.ReactNode
}

const FadeIn: FC<FadeInProps> = ({ children }) => {

    return(
        <div className={styles.uiContainer}>
            {children}
        </div>
    )
}

export default FadeIn