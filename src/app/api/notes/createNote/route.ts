import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest) {
    const { title, content } = req.body;
    
    if (req.method === 'POST') {
        try {
            const createNote = await prisma.notes.create({
                data: {
                    title,
                    content
                }
            });
            console.log(createNote);
            return NextResponse.json(createNote);
        }
        catch(e) {
            console.log("에러라고 에러!!");
            NextResponse.json('노트 생성에 실패해버렸따');
        }
        finally {
            await prisma.$disconnect();
        }
    }
}