import React, { FC, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement} from 'chart.js'
import styles from './SkillCard.module.css'
import CardFrame from './CardFrame'

Chart.register(ArcElement);

interface SkillCardProps {
    title: string
    uri: string
    percent: number
}

const SkillCard: FC<SkillCardProps> = ({ title, uri, percent }) => {

    const progressData = {
        datasets: [
            {
                data: [percent, 100 - percent],
                backgroundColor: ['#099', '#E0E0E0'],
                borderWidth: 0,
            },
        ],
    };
    
    const progressOptions = {
        cutout: '80%', // 内側の空白の割合
        // rotation: -0.5 * Math.PI, // 開始位置（上部を0度とする）
        // circumference: 2 * Math.PI, // 円周の長さ
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        animation: {
            duration: 2000, // アニメーションの時間（ミリ秒）
        },
    };

    return (
        <CardFrame>
            <div className={styles.container}>
                <Doughnut data={progressData} options={progressOptions} />
                <div className={styles.contents}>
                    <Image src={uri} alt='' width={100} height={100} className={styles.icon}/>
                </div>
            </div>
        </CardFrame>
    );
}

export default SkillCard
