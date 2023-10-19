export default function Gallery({arrayChar}){

  
    return (
        <div>
            {arrayChar.map((item, index) => (
           <div key={index}>
           <h1>{item.name}</h1>
           <img src={`http://localhost:3000/${item.image}`} alt="Images"/>
           </div>  
            ))}  </div>
    )
}