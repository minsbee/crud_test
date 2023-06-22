'use client'
import LoginMenu from "@/styles/login_menu";
import NavBar from "../styles/navigation";
import { styled } from "@mui/material/styles" 
import Link from "next/link";

const HeaderWrapper = styled('div')`
    position: fixed;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #000;
    z-index: 9999;
`

const Logo = styled(Link)`
    padding: 0 20px;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo href='/'>NEXT.JS</Logo>
            <NavBar />
            <LoginMenu />
        </HeaderWrapper>
    );
}

export default Header;