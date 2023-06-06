import React, { FC } from "react";
import Container from "../../../components/Container/Container";
import Reception from "./Reception";
import Vector from "../../../components/Vector/Vector";
import FadeIn from "../../../components/FadeIn/FadeIn";
import SlideUp from "../../../components/SlideUp/Slide";
import TitleWithIcon from "../../../components/TitleWithIcon/TitleWithIcon"
import ContentH1 from "../../../components/Content/ContentH1";
import Occupation from "../../../components/Occupation/Occupation";
import FadeInWithTimer from "../../../components/FadeIn/FadeInWithTimer";
import Tag from "../../../components/Tag/Tag";
import styles from "./page.module.css"

interface ReceptionPageProps {
    handleClickVector: () => void
}

const ReceptionPage: FC<ReceptionPageProps> = ({ handleClickVector }) => (
    <div className={styles.container}>
        <div className={styles.fadeInContainer}>
            <FadeIn>
                <TitleWithIcon title="ASARINGO'S Portfolio" uri='/bird.png' uri2='/birdzoom.png'/>
            </FadeIn>
        </div>
        <div className={styles.slideUpContainer}>
            <SlideUp timer={700}>
                <ContentH1 content='Asaringo'/>
            </SlideUp>
            <SlideUp timer={700}>
                <Occupation content='Software Engineer'/>
            </SlideUp>
        </div>
        <div className={styles.fadeInWithTimerContainer}>
            <FadeInWithTimer timer={1000}>
                <Tag platform='Github' content='@asaringo99' href='https://github.com/asaringo99'/>
                <Tag platform='Quita' content='@asaringo' href='https://github.com/asaringo99'/>
                <Tag platform='Zenn' content='@asaringo' href='https://github.com/asaringo99'/>
            </FadeInWithTimer>
        </div>
        <Reception
            content='Hi! Welcome To My Portfolio!'
            nextContent="Enjoy Asaringo's Web Page!"
        />
        <Container height='160px' width='100%' padding='5px'>
            <Vector color='rgb(0, 0, 0)' bold={3} handleClick={handleClickVector}/>
        </Container>
    </div>
)

export default ReceptionPage