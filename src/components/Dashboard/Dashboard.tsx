import React, { useState, useEffect } from 'react';
import {
  Redirect,
  useParams,
  Link,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AdminContainer from '../../containers/AdminContainer/AdminContainer';
import { getUserRole } from '../../services/eventsApi';
import Admin from '../Admin/Admin';
import AdminSideNav from '../AdminSideNav/AdminSideNav';
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
            <AdminSideNav userId={userId} />
          </div>
          <div className={style.item2}>
            <Admin />
          </div>
        </Router>
      </div>
    );
    //  return <AdminContainer />;
  }
  return <div> User</div>;
};

export default Dashboard;
