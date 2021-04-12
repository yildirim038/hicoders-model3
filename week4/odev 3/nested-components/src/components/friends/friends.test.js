import React from 'react';
import { render, screen } from '@testing-library/react';
import Friends from '../../App';

test("Friend First Name", async () => {
    render(<Friends />);
    const firstName = await screen.findByText('Stevana');
    expect(firstName).toBeInTheDocument();
  });

  test("Friend Last Name", async () => {
    render(<Friends />);
    const lastName = await screen.findByText('Giraldon');
    expect(lastName).toBeInTheDocument();
  });
