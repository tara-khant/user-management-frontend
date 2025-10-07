import React from 'react';
import { Layout, Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { confirm } = Modal;

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    confirm({
      title: 'Are you sure you want to logout?',
      okText: 'Logout',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        localStorage.removeItem('token');
        navigate('/');
      },
      onCancel() {
        console.log('Logout cancelled');
      },
    });
  };

  return (
    <AntHeader
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
      <Button type="primary" danger onClick={handleLogout}>
        Logout
      </Button>
    </AntHeader>
  );
};

export default Header;
