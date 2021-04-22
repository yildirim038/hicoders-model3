import React from 'react';
import { render } from '@testing-library/react';
import FormCreat from './creat-form';

test('check container classnames', () => {
  const{queryByTitle} = render(<FormCreat/>);
  const div = queryByTitle('containerinfo');
  expect(div).toHaveClass('container');
});
