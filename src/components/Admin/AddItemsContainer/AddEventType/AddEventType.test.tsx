import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import AddEventType from './AddEventType';

describe('<AddEventType/>', () => {
  test('renders add button & text input', () =>
   {
    
    render(
        <MemoryRouter>
     <AddEventType/>
     </MemoryRouter>
    );
   expect(screen.getByRole('button')).toHaveTextContent('Add');
   expect(screen.getByRole('input'));
  });

});
