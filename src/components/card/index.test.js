import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { entities } from "@tests/mocks";

import Component from "./index";

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    const mockStore = configureMockStore([thunk])({});

    wrapper = mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Component movie={entities[0]} />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should render 2 titles", () => {
    const titleText = wrapper.find(".movie-title").text();
    expect(titleText).toEqual("Title: Test Movie 1");

    const starsText = wrapper.find(".movie-stars").text();
    expect(starsText).toEqual("Stars: Star 1, Star 2");
  });
});
