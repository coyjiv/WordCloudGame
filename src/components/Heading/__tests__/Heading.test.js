import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Heading } from "../Heading";

test("Heading should contain 'props.children'", () => {
  const view = render(<Heading>test</Heading>);
  expect(screen.getByText(/test/i)).toHaveTextContent("test");
});

test("Heading should change font-size on 'size' prop", () => {
  const view = render(<Heading size={72}>test</Heading>);
  expect(screen.getByText(/test/i)).toHaveStyle("font-size:72px");
});

test("Heading should change text-transform on 'capitalize' prop", () => {
  const view = render(<Heading capitalize>test</Heading>);
  expect(screen.getByText(/test/i)).toHaveStyle("text-transform:capitalize");
});

test("Heading should change color on 'color' prop", () => {
  const view = render(<Heading color="green">test</Heading>);
  expect(screen.getByText(/test/i)).toHaveStyle("color:green");
});

test("Heading should change marginLeft on 'x' prop", () => {
  const view = render(<Heading x={10}>test</Heading>);
  expect(screen.getByText(/test/i)).toHaveStyle("margin-left:10px");
});

test("Heading should change marginTop on 'y' prop", () => {
  const view = render(<Heading y={10}>test</Heading>);
  expect(screen.getByText(/test/i)).toHaveStyle("margin-top:10px");
});
