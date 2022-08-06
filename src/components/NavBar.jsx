import React from 'react'
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
                    <a href="/music">
                        <strong>IAN M FRASER</strong>
                    </a>
                </li>
                <li>
                    <a href="/music/news">NEWS</a>
                </li>
                <li>
                    <a href="/music/albums">MUSIC</a>
                </li>
                <li>
                    <a href="/music/contact">CONTACT</a>
                </li>
            </NavMenu>
        </Nav>
    )
}

export default NavBar
