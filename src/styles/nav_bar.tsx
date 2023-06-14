'use client'
import { NextPage } from "next"
import Link from "next/link"
import { AppBar } from "@mui/material"
import { styled } from "@mui/material/styles"

const NavBtn = styled(Link) `
    color: white;
    font-size: 1.8rem;
    font-weight: 100;
    text-decoration: none;
    transition-duration: 300ms;

    :hover {
        color: red;
    }
`

const NavBar:NextPage = () =>  {
    return (
        <AppBar sx={{ display: 'flex', width:'40vw', height: '80px', left: '50%', right:'inherit', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5vw', color:'white', fontSize:'1.5rem', fontWeight:'700', bgcolor:'#222', transform: 'translateX(-50%)', borderRadius:'0 0 20px 20px' }}>
            <NavBtn href={ '/' }>Home</NavBtn>
            <NavBtn href={ '/' }>About</NavBtn>
            <NavBtn href={ '/' }>Movies</NavBtn>
            <NavBtn href={ '/' }>Q&A</NavBtn>
        </AppBar>
    )
}

export default NavBar;