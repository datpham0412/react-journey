import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('calls the onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me!</Button>);
  const buttonElement = screen.getByText('Click me!');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders the correct children', () => {
  render(<Button>Submit</Button>);
  const buttonElement = screen.getByText('Submit');
  expect(buttonElement).toBeInTheDocument();
});