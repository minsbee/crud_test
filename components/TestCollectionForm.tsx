import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function CreateDataComponent() {
    async function createData() {
        const newData = await prisma.collectionName.create({
            data: {
                // 데이터 필드 및 값 입력
            },
        });
        console.log(newData);
    }

    createData()
        .catch(error => {
            console.error(error);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });

    return <div>Data creation in progress...</div>;
}