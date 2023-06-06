import React, { useState, FC } from 'react';
import styles from './PopUp.module.css';

interface PopUpProps {
    popUpImage: React.ReactNode
    children: React.ReactNode
}

const PopUp: FC<PopUpProps> = ({ popUpImage, children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpenPopup}>
                {popUpImage}
            </div>
            {isPopupOpen && (
                <div className={styles.overlay} onClick={handleClosePopup}>
                    <div className={styles.popup} onClick={handleContentClick}>
                        <div className={styles.closeButton} onClick={handleClosePopup}>
                            &times;
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopUp;
