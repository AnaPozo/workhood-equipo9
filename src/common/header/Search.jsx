import React, { useState, useEffect, useRef } from "react";
import logo from "../../components/assets/images/logo.png";
import { Link } from "react-router-dom";
import Sdata from "../../components/shops/Sdata";

const Search = ({ CartItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const searchResultsRef = useRef();

  useEffect(() => {
    const filtered = Sdata.shopItems.filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    setFilteredItems(filtered);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setFilteredItems([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img id="logoheader" src={logo} alt='' /> 
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="busqueda"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            
          </div>
        </div>
      </section>

      {searchQuery && filteredItems.length > 0 && (
        <section className="search-results" ref={searchResultsRef}>
          <div className="container">
            <ul className="search-list">
              {filteredItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/item/${item.id}`}>
                    <img
                      src={item.cover}
                      alt={item.name}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};


export default Search

