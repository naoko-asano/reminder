import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  id: number;
  name: string | null;
}

interface ViewProps {
  users: User[];
}

export default async function Home() {
  const users = await prisma.user.findMany();
  return <View users={users} />;
}

export function View({ users }: ViewProps) {
  return (
    <main>
      Hello World
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  );
}
