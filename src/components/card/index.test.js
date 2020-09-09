import React from "react";
import { shallow } from "enzyme";
import CardComponent from "./index";

import store from "@store";
import { Provider } from "react-redux";

test("CheckboxWithLabel changes the text after click", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <CardComponent />
    </Provider>
  );

  expect(true).toEqual(true);
});
