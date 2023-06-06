import { useContext, FC } from 'react'
import CurrentSectionContext from './CurrentSectionContext'
import styles from './TableOfContents.module.css'

interface TableOfContentsProps {
    tableOfContents: { id: string, name: string}[]
}

const TableOfContents: FC<TableOfContentsProps> = ({ tableOfContents }) => {
    const currentSection = useContext(CurrentSectionContext)

    return (
        <div className={styles.container}>
            <div className={styles.tableOfContents}>
                {tableOfContents.map((section, index) => (
                    <a href={`#${section.id}`} key={index}>
                        <div className={currentSection == section.id ? styles.active : ''}>
                            {section.name}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TableOfContents