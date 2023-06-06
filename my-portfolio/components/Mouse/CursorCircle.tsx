// pages/CursorCircle.tsx
import { useEffect, useState, useRef } from 'react'
import styles from './CursorCircle.module.css'

const CursorCircle: React.FC = () => {
    const [cursorColor, setCursorColor] = useState<string>('#fff');
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.top = `${e.clientY}px`;
                cursor.style.left = `${e.clientX}px`;
            }
        };

        const hoverEffect = (e: Event) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.classList.add(styles.hovered);
            }
        }

        const hoverEnd = (e: Event) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.classList.remove(styles.hovered);
            }
        }

        const onMouseDown = () => {
            setCursorColor('#99f');
        };

        const onMouseUp = () => {
            setCursorColor('#fff');
        };

        window.addEventListener("mousemove", updateCursor);
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseover', hoverEffect);
            el.addEventListener('mouseout', hoverEnd);
        });

        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseover', hoverEffect);
                el.removeEventListener('mouseout', hoverEnd);
            });
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);

        };
    }, []);

    return (
        <div
        className={styles.cursor}
        ref={cursorRef}
        style={{backgroundColor: cursorColor}}
        />
    );
};

export default CursorCircle;
