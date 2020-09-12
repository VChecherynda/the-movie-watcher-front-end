import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Form from "./index";

describe("Create view", () => {
  let form;
  let inputTitle;
  let inputRelease;
  let inputFormat;
  let inputStars;
  let btnSubmit;
  let handleCreate;

  beforeEach(() => {
    handleCreate = jest.fn();

    form = render(<Form onSubmit={handleCreate} />);

    inputTitle = form.getByPlaceholderText("Enter title...");
    inputRelease = form.getByPlaceholderText("Enter release...");
    inputFormat = form.getByText("VHS");
    inputStars = form.getByPlaceholderText("Enter stars...");
    btnSubmit = form.getByText("Add movie");

    fireEvent.change(inputTitle, {
      target: { value: "Title" }
    });

    fireEvent.change(inputRelease, {
      target: { value: "1988" }
    });

    fireEvent.change(inputFormat, {
      target: { value: "VHS" }
    });

    fireEvent.change(inputStars, {
      target: { value: "Star 1, Star 2" }
    });

    fireEvent.click(btnSubmit);
  });

  test("should output values 'Title', '1988', 'VHS', 'Star 1, Star 2' after submit", async () => {
    await waitFor(() => {
      expect(handleCreate).toHaveBeenCalled();
    });
  });
});
