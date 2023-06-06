import React, { FC, useRef, useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FooterWithScroll from '../components/Footer/FooterWithScroll'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import Container from '../components/Container/Container'
import Skill from '../contents/home/Skill/Skill'
import Works from '../contents/home/Works/Works'
import CursorCircle from '../components/Mouse/CursorCircle'
import FollowingCircle from '../components/Mouse/FollowingCursor'
import IndexPage from '../components/TableOfContents/TableOfContents'
import CurrentSectionContext from '../components/TableOfContents/CurrentSectionContext'
import ReceptionPage from '../contents/home/Reception/page'
import AboutMyInfoPage from '../contents/home/AboutMyInfo/page'

const Home: FC = () => {
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const targetRef = useRef<HTMLInputElement>(null);
    const handleClickVector = () => {
        if(targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const receptionPageElement = <ReceptionPage handleClickVector={handleClickVector}/>
    const aboutMyInfoPageElement = <><span ref={targetRef}/><AboutMyInfoPage/></>
    const skillsPageElement = <Skill title='Skills'/>
    const worksPageElement = <Works title='Works'/>

    const tableOfContents = [
        { id: 'welcome', name: 'Welcome', height: '1000px', width: '100%', element: receptionPageElement},
        { id: 'aboutme', name: 'AboutMe', height: '1100px', width: '100%' , element: aboutMyInfoPageElement},
        { id: 'skills', name: 'Skills', height: '1200px', width: '100%', element: skillsPageElement},
        { id: 'works', name: 'Works', height: '1100px', width: '100%', element: worksPageElement},
        { id: 'thanks', name: 'Thanks'}
    ];
            
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        }, { threshold: 0.3 });  // Adjust this value to your liking
        
        tableOfContents.forEach((section) => {
            const sectionEl = sectionRefs.current[section.id];
            if (sectionEl) observer.observe(sectionEl);
        });

        return () => {
            tableOfContents.forEach((section) => {
                const sectionEl = sectionRefs.current[section.id];
                if (sectionEl) observer.unobserve(sectionEl);
            });
        };
    }, []);



    return (
        <>
            <Header />
            <div style={{ cursor: 'none' }} className={styles.container}>
                <CurrentSectionContext.Provider value={currentSection}>
                    {tableOfContents.map((section) => (
                        <>
                            <Container height={section.height} width={section.width}>
                                <span id={section.id} ref={(el) => sectionRefs.current[section.id] = el || null}/>
                                {section.element}
                            </Container>
                        </>
                    ))}
                    <IndexPage tableOfContents={tableOfContents}/>
                    <FollowingCircle/>
                    <CursorCircle/>
                </CurrentSectionContext.Provider>
                <span id={'thanks'} ref={(el) => sectionRefs.current['thanks'] = el || null}/>
                <FooterWithScroll/>
            </div>
        </>
    )
}


export default Home
