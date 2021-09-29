import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

describe('<Main/>', () => {
  test('render logged in user id', () => {
    const mockRoutes = [
      {
        path: '/',
        exact: true,
        sidebar: () => <div>Hello</div>
      }
    ];
    render(
      <MemoryRouter>
        <Main userId="testUser" routes={mockRoutes} />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome testUser')).toBeInTheDocument();
  });
});
