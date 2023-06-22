import { PrismaClient } from "../../../../prisma/@prisma-client";

const prisma = new PrismaClient();

export default async function NoteList() {
    const result = await prisma.notes.findMany({});
    return (
        <>
            <h4>상세페이지</h4>
            {result.map((e) => (
                <div key={e.id}>
                    <p>{e.title}</p>
                    <p>{e.content}</p>
                </div>
            ))}
        </>
    )
}
