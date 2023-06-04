import React, { FC, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import FadeIn from '../components/FadeIn'
import FadeInWithTimer from '../components/FadeInWithTimer'
import SlideUp from '../components/Slide'
import TitleWithIcon from '../components/TitleWithIcon'
import ContentH1 from '../components/ContentH1'
import Occupation from '../components/Occupation'
import Tag from '../components/Tag'
import Vector from '../components/Vector'
import Container from '../components/Container'

const Home: FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const handleClickVector = () => {
        if(targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <Header />
                <div className={styles.container}>
                    <FadeIn>
                        <TitleWithIcon title="ASARINGO'S Portfolio" uri='/bird.png' uri2='/birdzoom.png'/>
                    </FadeIn>
                    <SlideUp timer={700}>
                        <ContentH1 content='Asaringo'/>
                    </SlideUp>
                    <SlideUp timer={700}>
                        <Occupation content='Software Engineer'/>
                    </SlideUp>
                    <FadeInWithTimer timer={1000}>
                        <Tag platform='Github' content='@asaringo99' href='https://github.com/asaringo99'/>
                        <Tag platform='Quita' content='@asaringo' href='https://github.com/asaringo99'/>
                        <Tag platform='Zenn' content='@asaringo' href='https://github.com/asaringo99'/>
                    </FadeInWithTimer>
                    <Container height='100px' width='100%' padding='100px'>
                        <Vector color='rgb(0, 0, 0)' bold={3} handleClick={handleClickVector}/>
                    </Container>
                    <Container height='3000px' width='100%'>
                        <div ref={targetRef}>
                            hi
                        </div>
                    </Container>
                    <Container height='3000px' width='100%'>
                    </Container>
                </div>
            <Footer />
        </>
    )
}


export default Home
