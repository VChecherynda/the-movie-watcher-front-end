import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { entities } from "@tests/mocks";

import Component from "./index";

describe("Create view", () => {
  let form;
  let inputTitle;
  let inputRelease;
  let inputFormat;
  let inputStars;
  let btnSubmit;
  let handleCreate;

  beforeEach(() => {
    const mockStore = configureMockStore([thunk])({
      movies: {
        entities,
        searchWord: ""
      }
    });

    handleCreate = jest.fn();

    const props = {
      createProps: {
        handleCreate
      }
    };

    form = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Component props={props} />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should output values 'Title', '1988', 'VHS', 'Star 1, Star 2' after submit", async () => {
    inputTitle = form.getByPlaceholderText("Enter title...");
    inputRelease = form.getByPlaceholderText("Enter release...");
    inputFormat = form.getByText("VHS");
    inputStars = form.getByPlaceholderText("Enter stars...");
    btnSubmit = form.getByText("Add movie");
    handleCreate;

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

    waitFor(() => {
      expect(handleCreate).toHaveBeenCalledTimes(1);
    });
  });
});
