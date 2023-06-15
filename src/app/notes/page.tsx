import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Login() {
  const createNote = async () => {
    try {
      const newNote = await prisma.notes.create({
        data: {
          title: '할 일 제목',
          content: '할 일 내용',
        },
      });
      console.log('새로운 할 일이 생성되었습니다:', newNote);
    } catch (error) {
      console.error('할 일 생성 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div>
      <button onClick={createNote}>할 일 생성</button>
    </div>
  );
}