'use client';

import { useState, ChangeEvent } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const createNote = async () => {
    try {
      const newNote = await prisma.notes.create({
        data: {
          title,
          content,
        },
      });
      console.log('새로운 할 일이 생성되었습니다:', newNote);
    } catch (error) {
      console.error('할 일 생성 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="할 일 제목" />
      <textarea value={content} onChange={handleContentChange} placeholder="할 일 내용" />
      <button onClick={createNote}>할 일 생성</button>
    </div>
  );
}