import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertButton from '../components/AlertButton';

describe('AlertButton Component', () => {
  test('fires an alert when clicked', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AlertButton />);
    
    // Menggunakan getByRole untuk mencari tombol berdasarkan peran dan teksnya
    const button = screen.getByRole('button', { name: /click me/i });  // Pencocokan lebih fleksibel tanpa memperhatikan kapitalisasi huruf
    
    fireEvent.click(button);
    
    expect(alertSpy).toHaveBeenCalledTimes(1);
    alertSpy.mockRestore();
  });
});
