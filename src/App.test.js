import { render, screen } from '@testing-library/react';
import App from './App';

test('Check Sections', () => {
  render(<App />);
  const sections = ['intro', 'decentralization', 'data', 'transparency', 'contracts', 'tokenization', 'interoperability', 'censorship', 'security', 'financial', 'governance'];
  sections.forEach(element => {
    const section = screen.getByTestId(element);
    expect(section).toBeInTheDocument();
  });
  
});
