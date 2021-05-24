import React from 'react';
import ReactDOM from 'react-dom';
import ActionDetails from '../../ActionDetails/ActionDetails'
import {cleanup, render} from "@testing-library/react";
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';
import Search from "../Search";
import {BrowserRouter} from 'react-router-dom';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter><Search/></BrowserRouter>, div);
})

it('should render input with place holder Search Action', function () {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    expect(getByTestId("search-input-id")).toHaveProperty("placeholder", "Search Action")
});


it('should console log something when button is clicked', function () {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const consoleSpy = jest.spyOn(console, 'log');
    const action_card = getByTestId("action-card-id-1")
    fireEvent.click(action_card);
    expect(consoleSpy).toHaveBeenCalledWith(1);
});

it('there should be actions in the menu', function () {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const container = getByTestId("search-container-id")
    expect(container.childElementCount).toBeGreaterThanOrEqual(1)
});



it('should match snapshot', function () {
    //run npm test
    const tree = renderer.create(<BrowserRouter><Search/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('action card should have Name, Code, Company and Price', () => {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    // @ts-ignore
    const actionCard = getByTestId("action-card-id-1");
    const title = actionCard.children.item(0).textContent
    const company = actionCard.children.item(1).textContent
    const price = actionCard.children.item(2).textContent

    expect(title).not.toBeUndefined()
    expect(company).not.toBeUndefined()
    expect(price).not.toBeUndefined()

    expect(title).toContain('(')
    expect(title).toContain(')')
    expect(price).toContain('$')

});

it('should redirect to specific Action when action-card is clicked', () => {
    const redirectUrl = '/action_detail/1'
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const action_card = getByTestId("action-card-id-1")
    fireEvent.click(action_card);
    expect(window.location.href).toBe('http://localhost/action_detail/1')
})

