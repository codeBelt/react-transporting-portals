import React from 'react';
import { NextPage } from 'next';
import { AboutPage } from '../../components/views/about-page/AboutPage';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return <AboutPage />;
};

export default AboutRoute;
