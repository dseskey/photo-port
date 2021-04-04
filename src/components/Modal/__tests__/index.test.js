import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Cafe interior',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () =>{
    it('renders', () => {
        render(<Modal closeModal={mockToggleModal} currentPhoto={currentPhoto}/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Modal closeModal={mockToggleModal} currentPhoto={currentPhoto}/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        //Render Modal
        const { getByText } = render(<Modal
            closeModal={mockToggleModal}
            currentPhoto={currentPhoto}
          />);

        //simulate click event
        fireEvent.click(getByText('Close this modal'));

        //assert expected 
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})

