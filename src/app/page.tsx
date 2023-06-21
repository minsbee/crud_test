'use client'
import { styled } from "@mui/material/styles"

const HomePageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const HompageTitle = styled('h1')`
  font-size: 5rem;
  font-weight: 100;
  text-align: center;
`

const Home = () => {
  return (
    <HomePageWrapper>
      <HompageTitle>Let's study Next.JS to use <br />MongoDB, Prisma & MUI with Typescript!!</HompageTitle>
    </HomePageWrapper>
  );
};

export default Home;