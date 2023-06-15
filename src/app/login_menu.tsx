'use client'
import Link from "next/link"
import { styled } from "@mui/material/styles"



const HeaderBackWrap = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 90vw;
  height: 80px;
  box-shadow: 0 0 4px 4px -2px rgba(0, 0, 0, 0.4);
`
const LogoWrap = styled('div')`
  
`

const LoginMenuWrap = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

const LoginMenuBtns = styled(Link) `
  display: block;
  color: black;
  font-size: 1.4rem;
  font-weight: 300;
  text-decoration: none;
  transition-duration: 300ms;

  :hover {
      color: red;
  }
`


const LoginMenu = () =>  {
    return (
      <HeaderBackWrap>
        <LogoWrap />
        <LoginMenuWrap>
          <LoginMenuBtns href={ '/login' }>Sign In</LoginMenuBtns>
          <LoginMenuBtns href={ '../' }>Sign Up</LoginMenuBtns>
        </LoginMenuWrap>
      </HeaderBackWrap>
    )
}



export default LoginMenu;