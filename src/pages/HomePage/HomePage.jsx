import "../HomePage/HomePage.css";
import Menu from "../../components/Menu/Menu";

export default function HomePage() {
  return (
    <div className="bg-image">
    <div className="flags">
        <img src="../../../assets/SPAINPNG.png" alt="Spain's Flag"></img>
        <img src="../../../assets/UKPNG.png" alt="UK's flag"></img>
    </div>
      <h1 className="title">Game of Thrones</h1>
      <Menu/>
    </div>
  );
}
