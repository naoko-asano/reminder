import { render } from "@testing-library/react";
import { View } from "./page";

test("Hello Worldが表示されている", async () => {
  const { getByText } = render(<View users={[]} />);
  expect(getByText("Hello World")).toBeInTheDocument();
});

test("ユーザー名が表示される", () => {
  const { getByText } = render(<View users={[{ id: "aa", name: "Alice" }]} />);
  expect(getByText("Alice")).toBeInTheDocument();
});
