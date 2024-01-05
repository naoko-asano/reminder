interface User {
  id: number;
  name: string | null;
}

interface ViewProps {
  users: User[];
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
