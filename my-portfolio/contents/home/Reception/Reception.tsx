import React, { FC, useRef, useEffect, useState } from 'react'
import styles from './Reception.module.css'

interface ReceptionProps {
    content: string
    nextContent: string
}

const Reception: FC<ReceptionProps> = ({ content, nextContent }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showPage, setShowPage] = useState(false);
    const [showNextContent, setShowNextContent] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPage(true); // 3秒後にページを表示
        }, 2000);

        return () => {
            clearTimeout(timeoutId); // コンポーネントがアンマウントされたらタイマーをクリア
        };
    }, []);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowNextContent(true); // 3秒後にページを表示
        }, 5500);

        return () => {
            clearTimeout(timeoutId); // コンポーネントがアンマウントされたらタイマーをクリア
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current) return
        if (!showPage) return
        
        const text = content.split('')

        text.forEach((char, index) => {
            const span = document.createElement('span')
            span.textContent = char
            span.style.animationDelay = `${index * 0.1}s`
            containerRef.current?.appendChild(span)
        })
    }, [showPage])
    
    useEffect(() => {
        if (!contentRef.current) return
        if (!showNextContent) return
        
        const text = nextContent.split('')

        text.forEach((char, index) => {
            const span = document.createElement('span')
            span.textContent = char
            span.style.animationDelay = `${index * 0.1}s`
            contentRef.current?.appendChild(span)
        })
    }, [showNextContent])

    return (
        <div className={styles.container}>
            <div className={styles.effect} ref={containerRef}/>
            <div className={styles.effect} ref={contentRef}/>
        </div>
    )
}

export default Reception
