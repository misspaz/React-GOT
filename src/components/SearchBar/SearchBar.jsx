import "../SearchBar/SearchBar.css"

export default function SearchBar({ setSearch }) {
  const handleChange = (ev) => {
    const { value } = ev.target;
    // console.log(value);
    setSearch(value);
  };
  return (
    <div>
    <img className="search-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzRcBjb9X5eKrejd2XKp5xB8rIDbWusaDnT-eW-A&s" alt="search-icon"/>
      <input className="search-input" type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
}
