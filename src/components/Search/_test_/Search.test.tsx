import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fireEvent, waitFor } from '@testing-library/react';
import Search from "../Search";
import {BrowserRouter} from 'react-router-dom';
import {getByTestId} from "@testing-library/react";
import exp from "constants";

let root;

beforeEach(() => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter><Search/></BrowserRouter>, div);
    root = div;
})

describe('SearchBar setup', () => {
    it('should render input with place holder Search Action', function () {
        expect(getByTestId(root, "search-input-id")).toHaveProperty("placeholder", "Search Action")
    });

    it('should render input with empty value', function () {
        expect(getByTestId(root, "search-input-id")).toHaveProperty("value", "")
    });

    it('should render input with max length 30 and min length 1', function () {
        const input = getByTestId(root, "search-input-id")
        expect(input).toHaveProperty("maxLength", 30)
        expect(input).toHaveProperty("minLength", 1)
    });
})

describe('Search setup', () => {
    it('should match snapshot', function () {
        //run npm test
        const tree = renderer.create(<BrowserRouter><Search/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('there should be actions in the menu after page finish loading', async () => {
        const container = getByTestId(root, "search-container-id")
        await waitFor(() => expect(container.childElementCount)
            .toBeGreaterThanOrEqual(1))
            .then(() => {
                const action_card = getByTestId(root,"action-card-id-A")
                expect.any(action_card)
            })
    });
})

describe('search', () =>{

    it('should change the value of the input', () => {
        const input = getByTestId(root,"search-input-id")
        // @ts-ignore
        expect(input.value).toBe("")
        fireEvent.change(input, { target: { value: 'ADBE' } })
        // @ts-ignore
        expect(input.value).toBe('ADBE')
    })

    it('should console log value when search button is clicked', function () {
        const input = getByTestId(root,"search-input-id")
        fireEvent.change(input, { target: { value: 'ADBE' } })
        const consoleSpy = jest.spyOn(console, 'log');
        const button = getByTestId(root,"search-button-id")
        fireEvent.click(button);
        expect(consoleSpy).toHaveBeenCalledWith("ADBE");
    });

    it('there should be actions related to input "AB"', async function () {
        const input = getByTestId(root,"search-input-id")
        fireEvent.change(input, { target: { value: 'AB' } })
        const button = getByTestId(root,"search-button-id")
        fireEvent.click(button);
        const container = getByTestId(root, "search-container-id")
        await waitFor(() => expect(container.childElementCount)
            .toBe(2),)
            .then( () => {
                const action_card = getByTestId(root,"action-card-id-A")
                expect.any(action_card)
            })
    });

    it('should show that no actions where found when input "lalala"', async () => {
        const input = getByTestId(root,"search-input-id")
        fireEvent.change(input, { target: { value: 'lalala' } })
        const button = getByTestId(root,"search-button-id")
        fireEvent.click(button);
        const searchUnknown = getByTestId(root, "search-unknown-id")
        expect(searchUnknown.textContent).toBe("")
        await waitFor(() => expect(searchUnknown.textContent)
            .toBe("Unable to find the action you were looking for"),)
    })

})

describe('action cards in Search behaviour', () =>{
    it('should console log something action card is clicked', async function () {
        const consoleSpy = jest.spyOn(console, 'log');
        const container = getByTestId(root, "search-container-id")
        await waitFor(() => expect(container.childElementCount)
            .toBeGreaterThanOrEqual(1),)
            .then( () => {
            const action_card = getByTestId(root,"action-card-id-A")
            fireEvent.click(action_card);
            expect(consoleSpy).toHaveBeenCalledWith("A");
        })
    });

    it('action card should have Symbol and Name', async () => {
        const container = getByTestId(root, "search-container-id")
        await waitFor(() => expect(container.childElementCount)
                .toBeGreaterThanOrEqual(1), )
            .then( () => {
            const actionCard = getByTestId(root,"action-card-id-A");
            const symbol = actionCard.children.item(0).textContent;
            const name = actionCard.children.item(1).textContent;

            expect(symbol).toContain('A');
            expect(name).toContain('Agilent Technologies Inc');
        })
    });

    it('should redirect to specific Action when action-card is clicked', async () => {
        const container = getByTestId(root, "search-container-id")
        const redirectUrl = '/action_detail/Agilent%20Technologies%20Inc/A'

        await waitFor(() => expect(container.childElementCount)
            .toBeGreaterThanOrEqual(1), )
            .then( () => {
                const action_card = getByTestId(root, "action-card-id-A")
                fireEvent.click(action_card);
                expect(window.location.href).toBe(`http://localhost${redirectUrl}`)
            })
    })
})







