import React, { FC } from "react";
import PopUp from "../../../../components/PopUp/PopUp";
import WorkCard from "../../../../components/WorkCard/WorkCard";

const PortfolioWork: FC = () => {
    return (
        <PopUp popUpImage={<WorkCard uri="/works/portfolio.png"/>}>
            hello world!
        </PopUp>
    )
}

export default PortfolioWork