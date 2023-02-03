import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo/logo.png";

function NavBar() {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cancel, setCancel] = useState(false);

  function handleSearch() {
    setShowSearch(!showSearch);
  }

  function handleShowNavbar() {
    setShow(true);
    setShowSearch(false);
    setCancel(true);
  }

  function Cancel() {
    setShow(false);
    setCancel(false);
  }

  // Search name university
  const [universities, setUniversities] = useState([]);
  const getUniversities = () => {
    fetch("http://13.213.62.43:3333/api/universities/", {})
      .then((res) => res.json())
      .then((res) => {
        setUniversities(res.data);
      })
      .catch((error) => console.log(error));
  };
  const [searched, setSearched] = useState([]);
  const searchName = (event) => {
    let searchBoxValue = event.target.value;
    setSearched([]);
    if (!searchBoxValue) {
      return false;
    }
    // eslint-disable-next-line array-callback-return
    universities.map((university, index) => {
      let name = university.nameKH;
      for (let i = 0; i < name.length; i++) {
        if (name.substr(i, searchBoxValue.length) === searchBoxValue) {
          setSearched((current) => [...current, university]);
          break;
        }
      }
    });
  };

  useEffect(() => {
    getUniversities();
  }, []);

  const gotoDescription = (event) => {
    const universityId = event.currentTarget.getAttribute("data-id");
    window.location = "/detail/" + universityId;
  };

  return (
    <header>
      {/* <!-- Navigation Bar --> */}
      <nav>
        <div className="menu-icon">
          <span className="fas fa-bars" onClick={handleShowNavbar}></span>
        </div>

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={`nav-items  ${show && "active"}`}>
          <li>
            <NavLink exact activeClassName="active" to="/home">
              <a>ទំព័រដើម</a>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="*">
              {" "}
              <a>កម្មវិធីសិក្សា</a>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="*">
              <a>ជំនាញ</a>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/suggestion-major">
              {" "}
              <a>ណែនាំជំនាញ</a>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/about-us">
              {" "}
              <a>អំពីយើង</a>
            </NavLink>
          </li>
        </div>

        <div className="search-icon " onClick={handleSearch}>
          <span className="fas fa-search"></span>
        </div>

        <div className={`cancel-icon ${cancel && "show"}`}>
          <span className="fas fa-times " onClick={Cancel}></span>
        </div>

        <form id="search" action="#" className={`${showSearch && "active"}`}>
          <div className="search-box">
            <input
              id="search-box"
              name="searchByName"
              type="search"
              placeholder="ស្វែងរកឈ្មោះសាកលវិទ្យាល័យ"
              required
              onChange={searchName}
              // onFocus={searchName}
            />
            <div className="searched-name">
              {searched.slice(0, 10).map((university, i) => {
                return (
                  <div className="search-show" data-id={university.id} onClick={gotoDescription}>
                   <p> {university.nameKH}</p>
                    <img src={university.logo} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <button type="submit" className="fas fa-search"></button>
        </form>
      </nav>
    </header>
  );
}

export default NavBar;
