
import { useEffect, useState } from "react";
import axios from "axios";
import "./ChronologyPage.css"
import Menu from "../../components/Menu/Menu";
import SimpleBar from "simplebar-react";
import Flags from "../../components/Flags/Flags"
import Timeline from "../../components/timeline/Timeline";
import ReverseTimeline from '../../components/reverseTimeline/ReverseTimeline'




export default function ChronologyPage() {
const [characters, setCharacters] = useState([]);
const [active, setActive ] =useState(true)


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
        <Flags/>
        </div>
        <SimpleBar style = { { height: "80%", width: "100%" } }>
            <button className="btn-inver {active ? 'upMode' : 'downMode'" onClick = { () => setActive(!active) }></button>
            {active ?  <Timeline arrayChar = { characters }/> : <ReverseTimeline arrayChar = { characters }/>   }
        </SimpleBar>
        <Menu className="menuStyle"/>
    </div>
);
}
