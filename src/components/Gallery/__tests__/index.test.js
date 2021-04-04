import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const currentCategory = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {
  it('renders', () => {
    render(<Gallery {...currentCategory} />);
  });

  it('Matches Snapshot', () => {
      const {asFragment} = render(<Gallery {...currentCategory}/>);
      expect(asFragment()).toMatchSnapshot();
  })

  it('renders', () => {
    const { getByTestId } = render(<Gallery {...currentCategory} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
})