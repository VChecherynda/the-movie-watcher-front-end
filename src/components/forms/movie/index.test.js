import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Form from "./index";

const fakeMovie = {
  title: "Title",
  format: "VHS",
  release: "1988",
  stars: "Star 1, Star 2"
};

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
      target: { value: fakeMovie.title }
    });

    fireEvent.change(inputRelease, {
      target: { value: fakeMovie.release }
    });

    fireEvent.change(inputFormat, {
      target: { value: fakeMovie.format }
    });

    fireEvent.change(inputStars, {
      target: { value: fakeMovie.stars }
    });

    fireEvent.click(btnSubmit);
  });

  test("should output values 'Title', '1988', 'VHS', 'Star 1, Star 2' after submit", async () => {
    await waitFor(() => {
      expect(handleCreate).toHaveBeenCalledTimes(1);
    });
  });
});
