import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // البحث عن النص "Learn React" في الصفحة
  const linkElement = screen.getByText(/learn react/i);
  
  // التحقق من وجود الرابط في المستند
  expect(linkElement).toBeInTheDocument();
});