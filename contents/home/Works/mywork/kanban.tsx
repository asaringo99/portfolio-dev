import React, { FC } from "react";
import PopUp from "../../../../components/PopUp/PopUp";
import WorkCard from "../../../../components/WorkCard/WorkCard";

const KanbanWork: FC = () => {
    return (
        <PopUp popUpImage={<WorkCard uri="/works/kanban.png"/>}>
            hello world!
        </PopUp>
    )
}

export default KanbanWork