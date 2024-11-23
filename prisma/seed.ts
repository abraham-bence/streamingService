import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i < 30 ; i++) {
        const song = await prisma.songs.create({
            data : {
                author : faker.music.artist(),
                title : faker.music.songName(),
                length : faker.number.int({min : 50 , max : 500}),
                price : faker.number.int({min : 500, max : 10000})
            }
        }    
        )
    }
    for (let i = 0; i < 5; i++) {
        const song = await prisma.songs.create({
            data : {
                author : faker.music.artist(),
                title : faker.music.songName(),
                length : faker.number.int({min : 50 , max : 500}),
                price : 0
            }
        }    
        )
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })