import "./Timeline.css";


export default function Timeline({arrayChar}){
    return (
        <div className="elDiv timeline">
<<<<<<< HEAD
        {arrayChar.filter( (item) => item.age ).sort((a, b) => a.age - b.age).map((item, index) => (
        <div key={index} className={(index%2===0)? 'container left' : 'container right'}>
            <div className="card content">
=======

            {arrayChar.filter( (item) => item.age ).sort((a, b) => a.age - b.age).map((item, index) => (
        <div key={index} className={(index%2===0)? 'tl-container left' : 'tl-container right'}>
            <div className="card char-content">
>>>>>>> 6ea8cd872a59fd0c0d3f1f95fabf4bebdae1ba45
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
