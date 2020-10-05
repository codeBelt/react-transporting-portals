import React from 'react';
import { NextPage } from 'next';
import { AboutPage } from '../../components/views/about-page/AboutPage';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="About">
      <AboutPage />
    </MainLayout>
  );
};

export default AboutRoute;
