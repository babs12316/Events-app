import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import AdminContainer from '../../containers/AdminContainer/AdminContainer';
import { getUserRole } from '../../services/eventsApi';

const Dashboard = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const [role, setRole] = useState<string>();

  useEffect(() => {
    getUserRole(userId).then((data) => {
      setRole(data);
    });
  }, [userId]);

  if (role === 'admin') {
    return <AdminContainer />;
  }
  return <div> User</div>;
};

export default Dashboard;
