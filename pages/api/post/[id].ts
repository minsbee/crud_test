import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const noteId = req.query.id as string

    if (req.method === 'GET') {
        handleGET(noteId, res)
    } else if (req.method === 'DELETE') {
        handleDELETE(noteId, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// GET /api/post/:id
async function handleGET(noteId: string, res: NextApiResponse) {
    const note = await prisma.notes.findUnique({
        where: { id: noteId },
    })
    res.json(note)
}
// DELETE /api/post/:id
async function handleDELETE(noteId: string, res: NextApiResponse) {
    const note = await prisma.notes.delete({
        where: { id: noteId },
    })
    res.json(note)
}
