import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

it('should show "Hi"', async () => {
  const screen = render(<App />);

  const text = screen.getByText("Hi");

  expect(text).toBeInTheDocument();
});
