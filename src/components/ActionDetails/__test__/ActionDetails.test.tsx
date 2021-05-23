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
  fireEvent.click(getByTestId("detail-click-me-button-id"));
  expect(consoleSpy).toHaveBeenCalledWith('Clicked');
});

it('should match snapshot', function () {
  const tree = renderer.create(<ActionDetails/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should keep a $ in front of the input', () => {
  const { getByTestId } = render(<ActionDetails/>);
  // @ts-ignore
  const input: HTMLInputElement = getByTestId("input-id");
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('$23')
})

test('It should allow a $ to be in the input when the value is changed', () => {
  const { getByTestId } = render(<ActionDetails/>);
  // @ts-ignore
  const input: HTMLInputElement = getByTestId("input-id");
  fireEvent.change(input, { target: { value: '$23.0' } })
  expect(input.value).toBe('$23.0')
})

test('It should allow the $ to be deleted', () => {
  const { getByTestId } = render(<ActionDetails/>);
  // @ts-ignore
  const input: HTMLInputElement = getByTestId("input-id");
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('$23') // need to make a change so React registers "" as a change
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('')
})
