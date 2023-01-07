import React from "react";
import ChooseStateComponents from "./ChooseState";
import HUMIDITYComonents from "./Humidity";
import LeftComponents from "./Left";
import WeekInfoCardComponents from "./WeekinfoCard";
const Home=()=>{
    return(
        <>
<div className="homeWrap">
<div className="weatherSection">
<LeftComponents/>
<div className="rightSide">
    <ChooseStateComponents/>
    <WeekInfoCardComponents/>
<HUMIDITYComonents/>
</div>
</div>
</div>
        </>
    )
}
export default Home;