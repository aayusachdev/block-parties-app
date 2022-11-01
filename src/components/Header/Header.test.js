import { render, screen } from '@testing-library/react';
import Header from './index';

describe('/components/Header', () => {
  
  it('renders the App header Component', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Berlin Block Party Finder/i);
    expect(headerElement).toBeInTheDocument();
  });

});