import React from "react";
import renderer from "react-test-renderer";
import AddUserForm from "../AddUserForm";

it("renders correctly", () => {
  const tree = renderer.create(<AddUserForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
