import { render, screen } from '@testing-library/react';
import App from '../App';
import InfoStat from '../components/InfoStat';

test('test to see if app component will render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Covid/i);
  expect(linkElement).toBeInTheDocument();
});
it('test if infostat component renders', () => {
  const { container } = render(<InfoStat />);

  expect(container.firstChild).toHaveClass('infoStatsBlock');
});
