import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../../App';


test("First Name", async () => {
    render(<Item/>);
    const firstName = await screen.findByText('Nesta');
    expect(firstName).toBeInTheDocument();
  });

  test("Last Name", async () => {
    render(<Item/>);
    const lastName = await screen.findByText('Farrance');
    expect(lastName).toBeInTheDocument();
  });

