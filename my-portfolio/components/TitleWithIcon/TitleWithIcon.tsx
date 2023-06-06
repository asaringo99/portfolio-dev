import Image from 'next/image'
import React, { FC, useState, useEffect, useRef } from 'react'
import styles from './TitleWithIcon.module.css'

interface TitleWithIconProps {
    title: string
    uri: string
    uri2: string
}

const TitleWithIcon: FC<TitleWithIconProps> = ({ title, uri, uri2 }) => {

    const [showPage, setShowPage] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPage(true); // 3秒後にページを表示
        }, 500);

        return () => {
            clearTimeout(timeoutId); // コンポーネントがアンマウントされたらタイマーをクリア
        };
    }, []);

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }
    
    const handleMouseLeave = () => {
        setIsMouseOver(false)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerMain}>{ title }</div>
                <div className={`${showPage ? styles.containerIcon : styles.noneContainerIcon}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image src={isMouseOver ? uri2 : uri} alt="" width={100} height={100} className={styles.icon}/>
                </div>
            </div>
        </>
    )
}

export default TitleWithIcon
