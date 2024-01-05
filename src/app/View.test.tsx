import { render } from "@testing-library/react";
import { View } from "./View";

test("Hello Worldが表示されている", async () => {
  const { getByText } = render(<View users={[]} />);
  expect(getByText("Hello World")).toBeInTheDocument();
});

test("ユーザー名が表示される", () => {
  const { getByText } = render(<View users={[{ id: 1, name: "Alice" }]} />);
  expect(getByText("Alice")).toBeInTheDocument();
});
