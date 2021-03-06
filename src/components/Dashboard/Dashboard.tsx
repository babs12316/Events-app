import React, { useState, useEffect } from 'react';
import { useParams, BrowserRouter as Router } from 'react-router-dom';
import { adminSideNav, userSideNav } from '../../Constants';
import { adminRoutes } from '../../routes/AdminRoutes';
import { userRoutes } from '../../routes/UserRoutes';
import { getUserRole } from '../../services/eventsApi';
import Main from '../Layout/Main/Main';
import SideNav from '../Layout/SideNav/SideNav';
import style from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const [role, setRole] = useState<string>();

  useEffect(() => {
    getUserRole(userId).then((data) => {
      setRole(data);
    });
  }, [userId]);

  return (
    <div className={style.container}>
      <Router>
        <div className={style.item1}>
          <SideNav userId={userId} sideNav={role === 'admin' ? adminSideNav : userSideNav} />
        </div>
        <div className={style.item2}>
          <Main userId={userId} routes={role === 'admin' ? adminRoutes : userRoutes} />
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
