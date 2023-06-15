'use client'
import { GetServerSideProps } from "next"
import Link from "next/link"
import { styled } from "@mui/material/styles"

const mockDB = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
];


const HeaderBackWrap = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100vw;
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
          <LoginMenuBtns href={ './login' }>Sign In</LoginMenuBtns>
          <LoginMenuBtns href={ '../' }>Sign Up</LoginMenuBtns>
        </LoginMenuWrap>
      </HeaderBackWrap>
    )
}



export const getServerSideProps: GetServerSideProps = async () => {
    // Simulating a delay to mimic an async database request
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Simulating a database query
    const username = 'user1';
    const password = 'password1';
    const user = mockDB.find((u) => u.username === username && u.password === password);
  
    if (!user) {
      // Return an error message if the user is not found
      return {
        props: {
          error: 'Invalid username or password',
        },
      };
    }
  
    // Return the user data if login is successful
    return {
      props: {
        user,
      },
    };
  };
  

export default LoginMenu;