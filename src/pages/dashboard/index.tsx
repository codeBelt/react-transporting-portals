import React from 'react';
import { NextPage } from 'next';
import Dashboard from '../../components/views/dashboard/Dashboard';

interface IProps {}

const DashboardRoute: NextPage<IProps> = (props) => {
  return <Dashboard />;
};

export default DashboardRoute;
