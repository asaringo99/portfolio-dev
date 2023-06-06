import React, { FC } from 'react'
import Header from '../components/Header/Header'
import CursorCircle from '../components/Mouse/CursorCircle'
import FollowingCircle from '../components/Mouse/FollowingCursor'
import '../styles/globals.css'

const ComingSoon: FC = () => {
    return (
        <>
            <Header/>
            <div style={{height: '1000px', fontSize: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'italic', backgroundColor: 'wheat', overflowY: 'hidden'}}>
                Coming Soon
                <FollowingCircle/>
                <CursorCircle/>
            </div>
        </>
    )
}


export default ComingSoon
