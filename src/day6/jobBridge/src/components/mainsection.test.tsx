import Main from "./mainsection";
import Jobs from "./jobs";
import { render, screen, fireEvent } from "@testing-library/react";

// Write test case to check what you pass to the props reflect the same on the page.(hint: use getByText() method)


describe("when rendered Main component with `heading` prop", () => {
    const propValue = 'Find your job here..';

    test('renders the correct heading prop', () => {
      render(<Main heading={propValue} />);
      const headingElement = screen.getByText(propValue);
      expect(headingElement).toBeInTheDocument();
    });
  
});
