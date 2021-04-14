/**
 * Bize verilen Hava Durumu Api si kullanilarak kücük bir hava sicakligi gösteren program yazilmistir.
 * Api url kulanilarak baglanmis ve useState ile gelen veri kayda alinstir. 
 * Baslangic konumu olarak Zürich kullanilmis istenilirse input alinan girilen ilin adresi alinmaktadir.
 * Adres yine useState kullanilarak degisitirilmektedir.
 * useEffect ile degisiklerilen ilin yeni sicakligi ekrana yansitilmaktadir.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from '../../App';

test('render h1 element', () => {
    render(<Weather/>);
    screen.debug();
    expect(screen.getByText('Sicaklik:')).toBeInTheDocument()
  });
