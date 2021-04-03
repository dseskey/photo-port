import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';


afterEach(cleanup);

describe('Contact component', () =>{
    //baseline test
    it('renders', () =>{
        render(<ContactForm/>);
    })
    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Contact header is visible', () => {
    it('shows Contact header', () => {
        const {getByTestId} = render(<ContactForm/>);
        expect(getByTestId('contact-form-header')).toHaveTextContent('Contact me');
    });
});

describe('Submit button is visible', () =>{
    it('contains Submit label', () =>{ 
        const {getByTestId} = render(<ContactForm/>);
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    })
})