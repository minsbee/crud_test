'use client'
import { Link, styled } from '@mui/material';

const NavWrap = styled('div') `
    display: flex;
    width: 40vw;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw;
`

const NavBtn = styled(Link) `
    color: #fff;
    font-size: 1.8rem;
    font-weight: 300;
    text-decoration: none;
    transition-duration: 300ms;

    :hover {
        color: red;
    }
`

const NavBar = () =>  {
    return (
        <NavWrap>
            <NavBtn href={ '/' }>Home</NavBtn>
            <NavBtn href={ '../notes' }>Notes</NavBtn>
            <NavBtn href={ '../movies' }>Movies</NavBtn>
            <NavBtn href={ '/' }>Q&A</NavBtn>
        </NavWrap>
    )
}

export default NavBar;