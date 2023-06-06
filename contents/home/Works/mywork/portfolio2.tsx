import React, { FC } from "react";
import PopUp from "../../../../components/PopUp/PopUp";
import WorkCard from "../../../../components/WorkCard/WorkCard";

const PortfolioWork2: FC = () => {
    return (
        <PopUp popUpImage={<WorkCard uri="/works/portfolio2.png"/>}>
            hello world!
        </PopUp>
    )
}

export default PortfolioWork2