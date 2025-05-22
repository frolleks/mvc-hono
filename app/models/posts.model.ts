import { db } from "@utils/prismaClient";

export const Posts = {
  getAll: async () => {
    return await db.post.findMany();
  },
  getById: async (id: number) => {
    return await db.post.findUnique({
      where: { id },
    });
  },
  create: async (data: any) => {
    return await db.post.create({
      data,
    });
  },
};
