'use client'
import { AppBar, Link, styled } from '@mui/material';

const NavBtn = styled(Link) `
    color: #222;
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
        <AppBar sx={{ display: 'flex', width:'40vw', height: '80px', left: '50%', right:'inherit', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5vw', color:'#222', fontSize:'1.5rem', fontWeight:'700', bgcolor:'#ddd', transform: 'translateX(-50%)', borderRadius:'0 0 20px 20px' }}>
            <NavBtn href={ '/' }>Home</NavBtn>
            <NavBtn href={ '../notes' }>Notes</NavBtn>
            <NavBtn href={ '../movies' }>Movies</NavBtn>
            <NavBtn href={ '/' }>Q&A</NavBtn>
        </AppBar>
    )
}

export default NavBar;