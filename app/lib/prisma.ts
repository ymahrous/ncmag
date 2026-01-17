import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// create an extended client
const _prisma = new PrismaClient({
  accelerateUrl: process.env.PRISMA_ACCELERATE_URL,
}).$extends(withAccelerate());

// Type assertion to preserve model names
export const prisma = _prisma as unknown as PrismaClient;
