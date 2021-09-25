import React, { useState, useEffect } from 'react';
import { useParams, BrowserRouter as Router } from 'react-router-dom';
import { adminSideNav } from '../../Constants';
import { getUserRole } from '../../services/eventsApi';
import Admin from '../Admin/Admin';
import SideNav from '../SideNav/SideNav';
import style from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const [role, setRole] = useState<string>();

  useEffect(() => {
    getUserRole(userId).then((data) => {
      setRole(data);
    });
  }, [userId]);

  if (role === 'admin') {
    return (
      <div className={style.container}>
        <Router>
          <div className={style.item1}>
            <SideNav userId={userId} sideNav={adminSideNav} />
          </div>
          <div className={style.item2}>
            <Admin />
          </div>
        </Router>
      </div>
    );
  }
  return <div> User</div>;
};

export default Dashboard;
