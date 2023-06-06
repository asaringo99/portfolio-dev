import React, { FC } from 'react'
import styles from './Skill.module.css'
import SkillCard from '../../../components/SkillCard/SkillCard'
import Container from '../../../components/Container/Container'

interface SkillProps {
    title: string
}

const Skill: FC<SkillProps> = ({ title }) => (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>全般的に知識が浅いですね...。</div>
        <div className={styles.content}>ですが、少しずつ理解を深めて強いエンジニアになってみせます！！</div>
        <div className={styles.cardContainer}>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/node.png' percent={50}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/ts.svg' percent={60}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/flutter.png' percent={20}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/go.png' percent={55}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/C++.webp' percent={60}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/java.png' percent={15}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/python.png' percent={60}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/nextjs.svg' percent={30}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/React.png' percent={40}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/echo.png' percent={30}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/Gin.png' percent={20}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/Django.png' percent={15}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/linux.png' percent={30}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/Docker.png' percent={50}/>
            </Container>
            <Container width='180px' height='180px' padding='5px'>
                <SkillCard title='' uri='/k8s.png' percent={30}/>
            </Container>
        </div>
    </div>
)

export default Skill
