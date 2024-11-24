import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from '../components/Greeting';  // Pastikan jalur ini benar

describe('Greeting Component', () => {
  test('renders the correct greeting message', () => {
    render(<Greeting name="John" />);
    const greetingMessage = screen.getByText('Hello, John');
    expect(greetingMessage).toBeInTheDocument();
  });
});
