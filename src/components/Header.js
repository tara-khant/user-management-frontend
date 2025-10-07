import React, { useEffect, useState } from 'react';
import { Layout, Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { confirm } = Modal;

const Header = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  const handleLogout = () => {
    confirm({
      title: 'Are you sure you want to logout?',
      okText: 'Logout',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        localStorage.removeItem('token');
        navigate('/login');
      },
    });
  };

  return (
    <AntHeader className="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        User Management
      </h2>

      <div className="flex items-center gap-3">
        <Button
          type="default"
          onClick={toggleTheme}
          icon={dark ? <SunOutlined /> : <MoonOutlined />}
        >
          {dark ? 'Light' : 'Dark'}
        </Button>

        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;
