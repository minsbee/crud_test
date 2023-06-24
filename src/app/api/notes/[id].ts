import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const noteId = req.query.id as string;

    if (req.method === 'GET') {
        try {
            const getNote = await prisma.note.findUnique({
                where : {
                    id: noteId
                }
            })
            res.json(getNote)
        }
        catch (e) {
            res.status(500).json({error: 'GET 요청을 받는 데 실패했따ㅠ'})
        }
        finally {
            await prisma.$disconnect()
        }
    }else if (req.method === 'PUT') {
            try {
                const updateNote = await prisma.note.update({
                    where: {
                        id: noteId
                    },
                    data: {
                        title: req.body.title,
                        content: req.body.content,
                    },
                });
                res.json(updateNote);
                const updatedNote = await prisma.note.findUnique({
                    where: {
                        id: noteId
                    }
                });
                res.json(updatedNote);
            } catch (e) {
                res.status(500).json({ error: 'PUT 요청을 받는 데 실패했따ㅠ' });
            }
            finally {
                await prisma.$disconnect()
            }
    } else if (req.method === 'DELETE') {
        try {
            const deleteNote = await prisma.note.delete({
                where: {
                    id: noteId
                }
            })
            res.json(deleteNote)
        }
        catch(e) {
            res.status(500).json({error: 'DELETE 요청을 받는 데 실패했따ㅠ'})
        }
        finally {
            await prisma.$disconnect()
        }
    } else {
        throw new Error(
            `이 라우터에서 ${req.method} << 이 메서드는 지원하지 않는 메서드야! 코드를 확인해봐.`
        )
    }
}
