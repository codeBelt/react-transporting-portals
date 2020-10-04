import React from 'react';
import { NextPage } from 'next';
import { IndexPage } from '../components/views/index-page/IndexPage';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return <IndexPage />;
};

export default IndexRoute;
