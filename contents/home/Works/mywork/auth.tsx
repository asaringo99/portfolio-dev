import React, { FC } from "react";
import PopUp from "../../../../components/PopUp/PopUp";
import WorkCard from "../../../../components/WorkCard/WorkCard";

const AuthWork: FC = () => {
    return (
        <PopUp popUpImage={<WorkCard uri="/works/auth.png"/>}>
            hello world!
        </PopUp>
    )
}

export default AuthWork