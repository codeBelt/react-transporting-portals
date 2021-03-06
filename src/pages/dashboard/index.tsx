import React from 'react';
import { NextPage } from 'next';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { DashboardPage } from '../../components/views/dashboard/DashboardPage';

interface IProps {}

const DashboardRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Dashboard">
      <DashboardPage />
    </MainLayout>
  );
};

export default DashboardRoute;
