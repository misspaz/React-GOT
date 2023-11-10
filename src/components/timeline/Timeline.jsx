import "./Timeline.css";


export default function Timeline({arrayChar}){
    return (
        <div className="elDiv timeline">
        {arrayChar.filter( (item) => item.age ).sort((a, b) => a.age - b.age).map((item, index) => (
        <div key={index} className={(index%2===0)? 'container left' : 'container right'}>
            <div className="card content">
                <div className="edadNombre">
                    <h5>{item.age}</h5>
                    <h4>{item.name}</h4>
                </div>
                <div className="divImagenes">
                    <img className="chronoImg" src={`http://localhost:3000/${item.image}`} alt="Images"/>
                </div>
            </div>  
        </div>  
            ))}
        </div>
    )
}
