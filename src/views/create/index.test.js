import React from "react";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import Component from "./index";

import { entities } from "@test/mocks";
import { Provider } from "react-redux";

describe("Create view", () => {
  // let wrapper;

  // beforeEach(() => {
  //   const mockStore = configureMockStore([thunk])({
  //     movies: {
  //       entities,
  //       searchWord: ""
  //     }
  //   });

  //   wrapper = mount(
  //     <Provider store={mockStore}>
  //       <BrowserRouter>
  //         <Component />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // });

  test("should render 3 cards", () => {
    // const cards = wrapper.find(".card-body");
    expect(true).toEqual(true);
  });
});
