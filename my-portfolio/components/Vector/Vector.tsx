import React, { FC } from "react";
import styles from "./Vector.module.css"

interface VectorProps {
    color: string
    bold: number
    handleClick?: () => void
}

const Vector: FC<VectorProps> = ({ color, bold, handleClick }) => {

    return (
        <div>
            <svg onClick={handleClick} className={styles.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} stroke={color} stroke-width={bold} stroke-linecap="round" stroke-linejoin="round" width="60" height="60">
                <button></button><path d="M 12,4v 16m -4,-4l 4,4l 4,-4"/>
            </svg>
        </div>
    )
}


export default Vector