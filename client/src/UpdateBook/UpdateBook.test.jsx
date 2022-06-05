import { Route } from "react-router-dom";
import { useFetchBook } from "../hooks/useFetchBook";
import { useUpdateBook } from "../hooks/useUpdateBook";
import { UpdateBook } from "./UpdateBook";
jest.mock("../hooks/useFetchBook", () => ({
  useFetchBook: jest.fn(),
}));

jest.mock("../hooks/useUpdateBook", () => ({
  useUpdateBook: jest.fn(),
}));

describe("UpdateBook", () => {
  beforeEach(() => {
    useFetchBook.mockImplementation(() => ({}));
    useUpdateBook.mockImplementation(() => ({}));
  });
  it("fetches the book data for the given id", () => {
    renderWithRouter(
      () => <Route path=":id" element={<UpdateBook />} />,
      "/test-book-id"
    );
    expect(useFetchBook).toHaveBeenCalledWith("test-book-id");
  });

  describe("while loading", () => {
    it("renders a loader", () => {
      useFetchBook.mockImplementation(() => ({
        isLoading: true,
      }));

      const { getByTestId } = renderWithRouter(
        () => <Route path=":id" element={<UpdateBook />} />,
        "/test-book-id"
      );
      expect(getByTestId("loader")).toBeTruthy();
    });
  });

  // describe("with an error", () => {
  //   it("renders an error message", () => {});
  // });

  // describe("with data", () => {
  //   it("renders the update book title and the book form", () => {});

  //   describe("on book form submit", () => {
  //     it("updates the book data and navigates to the root page", () => {});
  //   });
  // });
});
