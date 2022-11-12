import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "./components";

test("Check for login form component buttons are rendered.", async () => {
  render(<LoginForm />);
  expect(await screen.findByText(/Use Guest Credentials/i)).toBeInTheDocument();
  expect(await screen.findByText(/Submit/i)).toBeInTheDocument();
});
