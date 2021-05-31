import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, render} from "@testing-library/react";
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';
import Search from "../Search";
import {BrowserRouter} from 'react-router-dom';
import SearchBar from "../SearchBar";

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

it('should render input with max length 30 and min length 2', function () {
    const { getByTestId } = render(<SearchBar/>);
    const input = getByTestId("search-input-id")
    expect(input).toHaveProperty("maxLength", 30)
    expect(input).toHaveProperty("minLength", 2)
});



/*it('', function () {
    const component = render(<BrowserRouter><Search/></BrowserRouter>)
    //why undefine?
    //console.log(component.state)
    //expect(component.state.searchInput).toBe('')
});*/



it('should console log something action card is clicked', function () {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const consoleSpy = jest.spyOn(console, 'log');
    //TODO hacerlo con un id posta
    const action_card = getByTestId("action-card-id-ADBE")
    fireEvent.click(action_card);
    expect(consoleSpy).toHaveBeenCalledWith("ADBE");
});

it('should console log something when search button is clicked', function () {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const consoleSpy = jest.spyOn(console, 'log');
    //TODO hacerlo con un id posta
    const action_card = getByTestId("search-button-id")
    fireEvent.click(action_card);
    expect(consoleSpy).toHaveBeenCalledWith("Fake Search Stocks");
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


it('action card should have Name, Code, Company and Score', () => {
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    // @ts-ignore
    const actionCard = getByTestId("action-card-id-ADBE");
    const title = actionCard.children.item(0).textContent
    const company = actionCard.children.item(1).textContent
    const score = actionCard.children.item(2).textContent

    expect(title).not.toBeUndefined()
    expect(company).not.toBeUndefined()
    expect(score).not.toBeUndefined()

});


it('should redirect to specific Action when action-card is clicked', () => {
    const redirectUrl = '/action_detail/ADBE'
    const { getByTestId } = render(<BrowserRouter><Search/></BrowserRouter>);
    const action_card = getByTestId("action-card-id-ADBE")
    fireEvent.click(action_card);
    expect(window.location.href).toBe('http://localhost/action_detail/ADBE')
})

