import React from "react";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import Component from "./index";

import { movie } from "@tests/mocks";
import { Provider } from "react-redux";

describe("Movie view", () => {
  let wrapper;

  beforeEach(() => {
    const mockStore = configureMockStore([thunk])({
      movies: {
        current: movie
      }
    });

    wrapper = mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should display card title", () => {
    const title = wrapper.find(".list-group-item__title");
    expect(title.text()).toEqual("Title: Title 1");
  });

  test("should display card release", () => {
    const title = wrapper.find(".list-group-item__release");
    expect(title.text()).toEqual("Release: 1978");
  });

  test("should display card format", () => {
    const title = wrapper.find(".list-group-item__format");
    expect(title.text()).toEqual("Format: VHS");
  });

  test("should display card stars", () => {
    const title = wrapper.find(".list-group-item__stars");
    expect(title.text()).toEqual("Stars: Star 1, Star 2");
  });
});
