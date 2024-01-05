import { PrismaClient } from "@prisma/client";
import { View } from "./View";

const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany();
  return <View users={users} />;
}
