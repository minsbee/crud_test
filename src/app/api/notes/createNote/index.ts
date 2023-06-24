import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body;
    
    if (req.method === 'POST') {
        try {
            const createNote = await prisma.note.create({
                data: {
                    title,
                    content
                }
            });
            console.log(createNote);
            res.status(200).json(createNote);
        }
        catch(e) {
            console.log("에러라고 에러!!");
            res.status(500).json('노트 생성에 실패해버렸따');
        }
        finally {
            await prisma.$disconnect();
        }
    }
}