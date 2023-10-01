import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    font-size: 16px;
    padding: 1.5em;
    top: 0;
    left: 0;
    width: 300px;
`

const NavMenu = styled.ul`
    list-style-type: none;
    position: fixed;

    > li:first-child a:hover {
        background-color: #f8f8f8;
    }

    > li a {
        color: black;
    }

    > li a:hover {
        cursor: pointer;
        background-color: #49fb35;
    }
`

function NavBar() {
    return (
        <Nav className="Navbar">
            <NavMenu>
                <li>
                    <Link to="/music">
                        <strong>IAN M FRASER</strong>
                    </Link>
                </li>
                <li>
                    <Link to="/music/news">NEWS</Link>
                </li>
                <li>
                    <Link to="/music/albums">MUSIC</Link>
                </li>
                <li>
                    <Link to="/music/contact">CONTACT</Link>
                </li>
            </NavMenu>
        </Nav>
    )
}

export default NavBar
