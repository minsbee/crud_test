'use client'

import Link from "next/link";
import {styled} from "@mui/material/styles";
import {PrismaClient} from "@prisma/client";
import { GetServerSideProps } from "next";

const prisma = new PrismaClient();


const NewNoteWrap = styled('div')`
    width: 300px;
    height: 300px;
    background-color: #000;

    > a {
        display: block;
        width: 50%;
        height: 50%;
        color: #000;
        margin: 0 auto;
        background-color: #fff;
    }
`

interface Props {
    props: [];
}

const Note: React.FC<Props>= props => {
    return (
        <>
            <NewNoteWrap>
                <Link href="./notes/newNote" >New Note</Link>
            </NewNoteWrap>
            <h4>상세페이지</h4>
            {props.props.map((e:any) => (
                <div key={e.id}>
                    <p>{e.title}</p>
                    <p>{e.content}</p>
                </div>
            ))}
        </>
    )
}

export const myNextPage: GetServerSideProps = async () => {
    const res = await prisma.notes.findMany({});
    const props = JSON.parse(JSON.stringify(res));

    return {
        props: {
            props
        }
    };
}

export default Note;