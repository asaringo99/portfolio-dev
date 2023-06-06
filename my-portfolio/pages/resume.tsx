import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Resume.module.css'
import { Jobs } from '../contents/resume'
import '../styles/globals.css'

const Resume = () => (
    <>
        <Header />
        <div className={styles.container}>
            <h1>My Resume</h1>
            {Jobs.map(job => (
                <div className={styles.card} key={job.id}>
                    <h2>{job.title} at {job.company}</h2>
                    <p>{job.dates}</p>
                    <ul>
                        {job.duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <Footer />
    </>
)

export default Resume
