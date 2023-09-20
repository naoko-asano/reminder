import { render } from "@testing-library/react";
import Home from "./page";

test("Hello Worldが表示されている", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Hello World")).toBeInTheDocument();
});
