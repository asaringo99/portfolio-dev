import React, { FC, useState, useEffect } from "react";
import styles from './FadeInWithTimer.module.css'

interface FadeInWithTimerProps {
    timer: number
    children: React.ReactNode
}

const FadeInWithTimer: FC<FadeInWithTimerProps> = ({ timer, children }) => {

    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPage(true); // 3秒後にページを表示
        }, timer);

        return () => {
            clearTimeout(timeoutId); // コンポーネントがアンマウントされたらタイマーをクリア
        };
    }, []);

    return (
        <div className={`${showPage ? styles.uiContainer : styles.noneContainer}`}>
            {children}
        </div>
    );
}

export default FadeInWithTimer