import { Test } from "@/app/components/Test";

const text_a = "hello world";

export default function Home() {
  return (
    <main>
      <Test text={text_a} />
    </main>
  );
}
