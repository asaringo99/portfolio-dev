import React, { FC, useRef, useEffect } from 'react'
import Image from 'next/image'
import {Chart, ArcElement} from 'chart.js'
import styles from './WorkCard.module.css'
import WorkCardFrame from './WorkCardFrame'

Chart.register(ArcElement);

interface WorkCardProps {
    uri: string
}

const WorkCard: FC<WorkCardProps> = ({ uri }) => {

    return (
        <WorkCardFrame>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <Image src={uri} alt='' width={490} height={240} className={styles.icon}/>
                </div>
            </div>
        </WorkCardFrame>
    );
}

export default WorkCard
