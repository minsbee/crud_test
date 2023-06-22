import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const Prisma = new PrismaClient();

interface createNoteRequest {
    title: string;
    content: string;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { title, content }: createNoteRequest = req.body;
    try {
        const result = await Prisma.notes.create({
            data: {
                title,
                content
            }
        });
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
    }
    finally {
        await Prisma.$disconnect();
    }
    
}