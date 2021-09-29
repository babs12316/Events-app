import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { debug } from 'console';
import Login from './Login';

describe('testing Login component', () => {
  test('render correct heading', () => {
    render(<Login />);
    const titleElement = screen.getByText('Login Form');
    expect(titleElement).toBeInTheDocument();
  });

  test('render all fields in form', () => {
    render(<Login />);
    const userInput = screen.getByTestId('userId');
    expect(userInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId('password');
    expect(passwordInput).toBeInTheDocument();
    const loginButton = screen.getByTestId('login');
    expect(loginButton).toBeInTheDocument();
  });
});
