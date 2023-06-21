'use client'
import LoginMenu from "@/styles/login_menu";
import NavBar from "../styles/navigation";
import { styled } from "@mui/material/styles" 

const HeaderWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

const Logo = styled('div')`
    font-size: 2rem;
    font-weight: 700;
    padding: 0 20px;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>NEXT.JS</Logo>
            <NavBar />
            <LoginMenu />
        </HeaderWrapper>
    );
}

export default Header;