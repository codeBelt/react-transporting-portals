import React from 'react';
import { NextPage } from 'next';
import { IndexPage } from '../components/views/index-page/IndexPage';
import { MainLayout } from '../components/shared/main-layout/MainLayout';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Welcome">
      <IndexPage />
    </MainLayout>
  );
};

export default IndexRoute;
