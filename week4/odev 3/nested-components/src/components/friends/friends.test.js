import React from 'react';
import { render, screen } from '@testing-library/react';
import Friends from '../../App';
/**
 * Bu testler ile arkadas isim ve soy isminin ekrana gelip gelmedigini kontorol ediyoruz.
 */
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
