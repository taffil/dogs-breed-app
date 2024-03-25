// Dashboard.test.js

import { render, screen, fireEvent } from "../helpers/test-utils";
import Dashboard from "../pages/Dashboard";

describe("Dashboard Page", () => {
  it("renders dogs after fetching", async () => {
    render(<Dashboard />);
    const dogCards = await screen.findAllByTestId("dog-card");
    expect(dogCards.length).toBeGreaterThan(0);
  });
});

describe("Dashboard Component", () => {
  it("updates search query, life span, and sort by name when inputs change", () => {
    render(<Dashboard />);

    const searchInput = screen.getByTestId("search-input");
    const minLifeSpanInput = screen.getByTestId("minLifeSpan");
    const maxLifeSpanInput = screen.getByTestId("maxLifeSpan");
    const sortByNameSwitch = screen.getByTestId("sortByName");

    fireEvent.change(searchInput, { target: { value: "Bulldog" } });
    fireEvent.change(minLifeSpanInput, { target: { value: 5 } });
    fireEvent.change(maxLifeSpanInput, { target: { value: 15 } });
    fireEvent.change(sortByNameSwitch, { target: { checked: false } });

    expect(searchInput).toHaveValue("Bulldog");
    expect(minLifeSpanInput).toHaveValue(5);
    expect(maxLifeSpanInput).toHaveValue(15);
    expect(sortByNameSwitch).not.toHaveAttribute("checked", true);
  });

  it("triggers search when search button is clicked", async () => {
    render(<Dashboard />);
    const searchButton = screen.getByTestId("search-button");
    fireEvent.click(searchButton);
  });
});
