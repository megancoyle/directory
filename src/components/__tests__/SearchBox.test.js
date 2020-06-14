import React from "react";
import renderer from "react-test-renderer";
import SearchBox from "../SearchBox";

it("renders correctly", () => {
  const tree = renderer.create(<SearchBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
