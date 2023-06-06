import React, { FC } from 'react'
import styles from './AboutMyInfo.module.css'

interface AboutmeProps {
    title: string
}

const AboutMe: FC<AboutmeProps> = ({ title }) => (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
            <div className={styles.textContainer}>こんにちは！ asaringoといいます！</div>
            <div className={styles.textContainer}>2021年卒の社会人3年目エンジニアです。</div>
            <div className={styles.textContainer}>Webアプリケーションや機械学習など</div>
            <div className={styles.textContainer}>様々な領域での業務経験があります。</div>
            <div className={styles.textContainer}>色々手を出し若干迷走気味な私ですが</div>
            <div className={styles.textContainer}>今後はWeb系やインフラ系のエンジニアとして</div>
            <div className={styles.textContainer}>腰を据えてキャリアを築きたいと考えています。</div>
            <div className={styles.textContainer}>どうぞ、よろしくお願いいたします！</div>
        </div>
    </div>
)

export default AboutMe