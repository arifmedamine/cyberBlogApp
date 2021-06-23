import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() 

async function main() {
    await prisma.article.create({
        data: {
            title: "une nouvelle formule pour le vaccin contre le covid-19",
        },
    });
  }

  main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })