import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const UsersLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '24px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default UsersLayout;
