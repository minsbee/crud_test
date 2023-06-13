'use client'

import { AppBar } from "@mui/material"
import { NextPage } from "next"
import Link from "next/link"

const Header:NextPage = () =>  {
    return (
        <AppBar sx={{ display: 'flex', width:'40vw', height: '80px', left: '50%', right:'inherit', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5vw', color:'white', fontSize:'1.5rem', fontWeight:'700', bgcolor:'#222', transform: 'translateX(-50%)', borderRadius:'0 0 20px 20px' }}>
        <Link href={ '/' }>Home</Link>
        <Link href={ '/' }>About</Link>
        <Link href={ '/' }>Movies</Link>
        <Link href={ '/' }>Q&A</Link>
        </AppBar>
    )
}

export default Header;