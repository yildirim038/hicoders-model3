import React from 'react';
import { render } from '@testing-library/react';
import CreateList from './creat-form';

test('check screen classnames', () => {
  const{queryByTitle} = render(<CreateList/>);
  const div = queryByTitle('screeninfo');
  expect(div).toHaveClass('screen');
});

