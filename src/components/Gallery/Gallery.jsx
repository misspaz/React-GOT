import "../Gallery/Gallery.css";

export default function Gallery({arrayChar}){

  
    return (
        <div>
            {arrayChar.map((item, index) => (
           <div className="character-div overlay" key={index}>
           {/* <h1 className="hover-text">{item.name}</h1> */}
           <img className="character-img" src={`http://localhost:3000/${item.image}`} alt="Images"/>
           </div>  
            ))}  </div>
    )
}