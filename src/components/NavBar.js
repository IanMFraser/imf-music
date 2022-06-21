import React from "react";
import styled from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
    font-size: 16px;
    padding: 1em;
    position: sticky;
    width: 200px;
  `;

  const NavMenu = styled.ul`
    list-style-type: none;

    > li a {
      color: black;
    }
    > li a:hover {
      cursor: pointer;
      background-color: #49fb35;
    }
  `;

  return (
    <Nav className="Navbar">
      <NavMenu>
        <strong>IAN M FRASER</strong>
        <li>
          <a href="/music">NEWS</a>
        </li>
        <li>
          <a href="/music/albums">MUSIC</a>
        </li>
        <li>
          <a href="/music/contact">CONTACT</a>
        </li>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
