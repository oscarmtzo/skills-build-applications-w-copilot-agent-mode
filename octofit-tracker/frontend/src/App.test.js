import { render, screen } from '@testing-library/react';
import App from './App';

test('renders octofit navigation', () => {
  render(<App />);
  const brandElement = screen.getByText(/octofit/i);
  expect(brandElement).toBeInTheDocument();
});
