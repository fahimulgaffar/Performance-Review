// Import necessary modules and dependencies for testing
import React from 'react';
import App from './App';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Dashboard from "./Dashboard";

describe('App component', () => {
  it('submits signup information correctly', async () => {
    // Mocking the fetch function to simulate the API call
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
    });

    const { getByPlaceholderText, getByText } = render(<App />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testPassword' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText('Signup'));

    // Since the status is 200, the message should indicate a successful signup
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Signup successful. You can now log in')).toBeInTheDocument();
  });

  it('handles login correctly', async () => {
    // Mocking the fetch function to simulate the API call
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
    });

    const { getByPlaceholderText, getByText } = render(<App />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testPassword' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText('Login'));

    // Since the status is 200, the message should indicate a successful login
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Login successful')).toBeInTheDocument();
  });

  it('validates password requirements', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'short' } });

    // The message should indicate that the password should be at least 8 characters long
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Password should be at least 8 characters long')).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'sufficientPassword' } });

    // The password message should be cleared when a sufficient password is entered
    // eslint-disable-next-line testing-library/prefer-presence-queries,testing-library/prefer-screen-queries
    expect(getByText('Password should be at least 8 characters long')).not.toBeInTheDocument();
  });

  it('displays welcome message with username', () => {
    const username = 'testUser';
    render(<Dashboard username={username} onLogout={() => {}} />);

    expect(screen.getByText(`Welcome, ${username}!`)).toBeInTheDocument();
  });

  it('posts a review correctly', async () => {
    global.fetch = jest.fn().mockResolvedValue({ status: 201 });

    render(<Dashboard username="testUser" onLogout={() => {}} />);

    const reviewText = 'This is a review';
    fireEvent.change(screen.getByPlaceholderText('Write your performance review here'), {
      target: { value: reviewText },
    });
    fireEvent.click(screen.getByText('Post Review'));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Write your performance review here').value).toBe('');
    });
  });

  it('loads and saves drafts', () => {
    render(<Dashboard username="testUser" onLogout={() => {}} />);

    const draftText = 'This is a draft';
    fireEvent.change(screen.getByPlaceholderText('Save your draft here'), {
      target: { value: draftText },
    });

    fireEvent.click(screen.getByText('Save Draft'));
    expect(localStorage.getItem('draft_testUser')).toBe(draftText);

    fireEvent.click(screen.getByText('Load Draft'));
    expect(screen.getByPlaceholderText('Write your performance review here').value).toBe(draftText);
  });

  it('displays an error message for unsuccessful signup', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    status: 400,
  });

  const { getByPlaceholderText, getByText } = render(<App />);
  fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testPassword' } });
  fireEvent.click(getByText('Signup'));

  await waitFor(() => {
    expect(getByText('Signup failed. Please try again.')).toBeInTheDocument();
  });
});
});


