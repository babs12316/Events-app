import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import SideNav from './SideNav';

describe('<SideNave/>', () => {
  test('renders correct items in sidenav', () =>
   {
    const mockSideNav= [{ itemName: 'mockEvents', itemPath: 'mock-events' }];
    render(
        <MemoryRouter>
     <SideNav  userId={'testUser'} sideNav={mockSideNav}/>
     </MemoryRouter>
    );
    expect(screen.getByText('mockEvents').closest('a')).toHaveAttribute('href', '/dashboard/testUser/mock-events')
    
  });

});
