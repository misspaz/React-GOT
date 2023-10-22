import React, { useState } from "react";
import Timeline from "../timeline/Timeline";
import ReverseTimeline from "../reverseTimeline/ReverseTimeline";

const ButtonTimeline = () => {
    const [active, setActive ] =useState()
ButtonTimeline()
// let result = condition ? value1 : value2;
return (
    <div className={active ? 'Timeline' : 'ReverseTimeline'}>
        <button onClick={() => setActive(!active)}>{active ? "☾" : "☀️"}</button>
    </div>
)
}
export default  ButtonTimeline
