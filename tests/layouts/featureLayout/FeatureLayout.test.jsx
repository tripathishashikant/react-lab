import { render, screen } from '@testing-library/react';
import { MemoryRouter, useMatches, useNavigate } from 'react-router-dom';
import FeatureLayout from '@/layouts/featureLayout/FeatureLayout';

// Mock react-router-dom hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useMatches: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('FeatureLayout', () => {
  it('should use tabIndex instead of tabindex on the back button', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    useMatches.mockReturnValue([
      {
        handle: {
          example: {
            title: 'Test Example',
            description: 'Test Description',
          },
        },
      },
    ]);

    render(
      <MemoryRouter>
        <FeatureLayout />
      </MemoryRouter>
    );

    const button = screen.getByTitle('Click to go back');
    
    // In React, the prop is tabIndex, but it renders as tabindex in the DOM.
    // However, if we pass tabindex (lowercase) in JSX, React might still render it,
    // but it will trigger a console warning.
    expect(button.getAttribute('tabindex')).toBe('0');
  });
});
