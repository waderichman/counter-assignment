import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  var { getByText } = render(<Counter />)
  var msg = getByText(/Counter/i)
  expect(msg).toBeInTheDocument()
})

test('should render initial count with value of 0', () => {
  var { getByTestId } = render(<Counter />)
  var value = getByTestId('count')
  expect(value.textContent).toBe('0')
})

test('clicking + increments the count', () => {
  var { getByTestId, getByText } = render(<Counter />)
  var inc = getByText('+')
  var cv = getByTestId('count')
  fireEvent.click(inc)
  expect(cv.textContent).toBe('1')
})

test('clicking - decrements the count', () => {
  var { getByTestId, getByText } = render(<Counter />)
  var decr = getByText('-')
  var cv = getByTestId('count')
  fireEvent.click(decr)
  expect(cv.textContent).toBe('-1')
})





