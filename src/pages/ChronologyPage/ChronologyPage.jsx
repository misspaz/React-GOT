
import { useEffect, useState } from "react";
import axios from "axios";
import Timeline from "../../components/timeline/Timeline";
import "./ChronologyPage.css"
import Menu from "../../components/Menu/Menu";
import SimpleBar from "simplebar-react";
import Flags from "../../components/Flags/Flags"
// import ReverseTimeline from "../../components/reverseTimeline/ReverseTimeline";


export default function CharactersPage() {
const [characters, setCharacters] = useState([]);

useEffect(() => {
    const getcharacters = async () => {
    const { data } = await axios("http://localhost:3000/characters");
    console.log(data);

    setCharacters(data);
    };

    getcharacters();
}, []);

return (                                                        
    <div className="content1">
        <div>
        <Flags showHomeIcon={true}/>
        </div>
        <SimpleBar style={{ height: "80%", width: "100%" }}>

            <Timeline arrayChar={characters}/>
            {/* <ReverseTimeline arrayChar={characters}/> */}
        </SimpleBar>
        <Menu className="menuStyle"/>
    </div>
);
}
