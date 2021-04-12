import React from 'react';
import { render, screen } from '@testing-library/react';
import Childs from '../../App';
/**
 * Bu testler ile cocuk isim ve soy isminin ekrana gelip gelmedigini kontorol ediyoruz.
 */
test("Child First Name", async () => {
    render(<Childs />);
    const firstName = await screen.findByText('Hephzibah');
    expect(firstName).toBeInTheDocument();
  });

 test("Child Last Name", async () => {
    render(<Childs/>);
    const lastName = await screen.findByText('Gervaise');
    expect(lastName).toBeInTheDocument();
  });
