import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { afterEach } from "vitest";
import { store } from "../state/store";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) => {
  render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    ),
    ...options,
  });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
