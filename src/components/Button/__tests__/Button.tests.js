import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

test("Button is changing name due to prop name", () => {
  const view = render(<Button name="test" />);
  expect(screen.getByText(/test/i)).toHaveTextContent("test");
});

test("Button is becoming disabled after setting 'disabled' prop", () => {
  const view = render(<Button disabled={true} name="Click me" />);
  expect(screen.getByText(/Click me/i)).toBeDisabled();
});

test("Button executes passed function in 'onClick", () => {
  const handleClick = jest.fn();
  const view = render(<Button onClick={handleClick} name="Click me" />);
  const button = screen.getByText(/Click me/i);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
