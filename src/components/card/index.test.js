import React from "react";
import { BrowserRouter } from "react-router-dom";

import Component from "./index";

import store from "@store";
import { Provider } from "react-redux";

const movie = {
  title: "Young Frankenstein",
  stars: "Gene Wilder, Kenneth Mars"
};

describe("Card component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Component movie={movie} />
      </BrowserRouter>
    </Provider>
  );

  test("should render 2 titles", () => {
    const titleText = wrapper.find(".movie-title").text();
    expect(titleText).toEqual("Title: Young Frankenstein");

    const starsText = wrapper.find(".movie-stars").text();
    expect(starsText).toEqual("Stars: Gene Wilder, Kenneth Mars");
  });
});
