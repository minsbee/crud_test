'use client'
import Link from "next/link"
import { styled } from "@mui/material/styles"

const LoginMenuWrap = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 20px;
`

const LoginMenuBtns = styled(Link) `
  display: block;
  padding: 10px 20px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 100;
  text-decoration: none;
  transition-duration: 300ms;
  border: 1px solid #fff;
  border-radius: 10px;
  :hover {
      color: red;
      border: 1px solid red;
  }
`

const LoginMenu = () =>  {
    return (
        <LoginMenuWrap>
          <LoginMenuBtns href={ '/login' }>Sign In</LoginMenuBtns>
          <LoginMenuBtns href={ '../' }>Sign Up</LoginMenuBtns>
        </LoginMenuWrap>
    )
}



export default LoginMenu;