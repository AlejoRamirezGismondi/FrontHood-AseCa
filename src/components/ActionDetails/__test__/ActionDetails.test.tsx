import React from 'react';
import ReactDOM from 'react-dom';
import ActionDetails from "../ActionDetails";
import {cleanup, render} from "@testing-library/react";
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActionDetails/>, div);
})

it('should render correctly', function () {
  const { getByTestId } = render(<ActionDetails/>);
  expect(getByTestId("detail-id")).toHaveTextContent("Hello World")
});

it('should console log something when button is clicked', function () {
  const { getByTestId } = render(<ActionDetails/>);
  const consoleSpy = jest.spyOn(console, 'log');
  fireEvent.click(getByTestId("detail-button-id"));
  expect(consoleSpy).toHaveBeenCalledWith('Clicked');
});

it('should match snapshot', function () {
  const tree = renderer.create(<ActionDetails/>).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('CheckboxWithLabel changes the text after click', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <ActionDetails labelOn="On" labelOff="Off" />,
//   );
//
//   expect(queryByLabelText(/off/i)).toBeTruthy();
//
//   fireEvent.click(getByLabelText(/off/i));
//
//   expect(queryByLabelText(/on/i)).toBeTruthy();
// });
