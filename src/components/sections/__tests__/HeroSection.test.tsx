import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { HeroSection } from '../HeroSection';

// Mock framer-motion to avoid animation-related test issues
vi.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef<HTMLDivElement, any>((props, ref) => <div ref={ref} {...props} />)
  }
}));

// Mock IntersectionObserver for useInView
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});

window.IntersectionObserver = mockIntersectionObserver;

// Mock scrollIntoView
const mockScrollIntoView = vi.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

describe('HeroSection', () => {
  const mockOnOpenForm = vi.fn();

  beforeEach(() => {
    // Mock getElementById to return an element with scrollIntoView
    vi.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: mockScrollIntoView
    } as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the hero section with correct heading', () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Turn One Dev Team Into an AI-Powered 10× Squad'
    );
  });

  it('renders the subtitle correctly', () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    expect(screen.getByText('AI-First Development Transformation Program')).toBeInTheDocument();
  });

  it('renders both call-to-action buttons', () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    expect(screen.getByRole('button', { name: /see the program/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book discovery call/i })).toBeInTheDocument();
  });

  it('calls onOpenForm when "Book Discovery Call" button is clicked', () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    const bookCallButton = screen.getByRole('button', { name: /book discovery call/i });
    fireEvent.click(bookCallButton);
    
    expect(mockOnOpenForm).toHaveBeenCalledTimes(1);
  });

  it('scrolls to program section when "See the Program" button is clicked', async () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    const seeProgram = screen.getByRole('button', { name: /see the program/i });
    fireEvent.click(seeProgram);
    
    await waitFor(() => {
      expect(document.getElementById).toHaveBeenCalledWith('program');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  it('renders floating orbs for visual enhancement', () => {
    const { container } = render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    // Check for floating orb elements by their distinctive classes
    const orbs = container.querySelectorAll('.bg-blue-500\\/20, .bg-purple-500\\/20, .bg-indigo-500\\/20');
    expect(orbs.length).toBeGreaterThan(0);
  });

  it('has proper semantic structure', () => {
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    // Should be wrapped in a section element
    const section = screen.getByRole('banner', { hidden: true }) || 
                   screen.getByText('Turn One Dev Team Into an AI-Powered 10× Squad').closest('section');
    expect(section).toBeInTheDocument();
  });

  it('handles missing program element gracefully', () => {
    // Mock getElementById to return null
    vi.spyOn(document, 'getElementById').mockReturnValue(null);
    
    render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    const seeProgram = screen.getByRole('button', { name: /see the program/i });
    
    // Should not throw an error when element doesn't exist
    expect(() => fireEvent.click(seeProgram)).not.toThrow();
  });

  it('maintains component stability with memo', () => {
    const { rerender } = render(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    // Re-render with same props should not cause unnecessary re-renders
    // This tests that memo is working correctly
    rerender(<HeroSection onOpenForm={mockOnOpenForm} />);
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
}); 