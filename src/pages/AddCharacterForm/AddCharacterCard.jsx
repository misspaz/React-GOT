export default function AddCharacterCard({name, image}){
    return (
    <>
    <div>
        <h2>{name}</h2>
        <img width="300"  src={image} alt={name} />
       
        
    </div>
    </>
    );
}
