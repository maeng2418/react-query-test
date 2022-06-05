// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes } from "react-router-dom";

global.renderWithRouter = (renderComponent, route) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>{renderComponent()}</Routes>
      </MemoryRouter>
    ),
  };
};
