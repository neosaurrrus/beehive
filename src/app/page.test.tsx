
import { render, screen } from '@testing-library/react'
import Home from "./page";

describe("Home Page", () => {
  it("should run this test suite", () => {
    expect(1).toBe(1);
  });
  it("should render the heading", () => {
    const { getByText } = render(<Home />);

    screen.debug(document.body)
    const heading = getByText(/The Estimation Game/i);
  });
});
 