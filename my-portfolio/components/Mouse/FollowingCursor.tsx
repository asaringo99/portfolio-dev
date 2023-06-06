import { useEffect, useState, useRef } from 'react'
import styles from './FollowingCircle.module.css'

const FollowingCircle: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const positionRef = useRef({x: 0, y: 0});
    const targetRef = useRef({x: 0, y: 0});
    const requestRef = useRef<number>();

    useEffect(() => {
        const updatePosition = (x: number, y: number) => {
            positionRef.current.x += (x - positionRef.current.x) * 0.1;
            positionRef.current.y += (y - positionRef.current.y) * 0.1;
        };

        const animate = () => {
            const cursor = cursorRef.current;
            if (cursor) {
                updatePosition(targetRef.current.x, targetRef.current.y);
                cursor.style.top = `${positionRef.current.y}px`;
                cursor.style.left = `${positionRef.current.x}px`;
                requestRef.current = requestAnimationFrame(animate);
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            targetRef.current = {x: e.clientX, y: e.clientY};
        };

        window.addEventListener("mousemove", onMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div
        className={styles.cursor}
        ref={cursorRef}
        />
    );
};

export default FollowingCircle;
