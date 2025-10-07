import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const ThemeToggle = ({ dark, setDark }) => {
  return (
    <Button
      type="default"
      onClick={() => setDark(!dark)}
      icon={dark ? <SunOutlined /> : <MoonOutlined />}
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ThemeToggle;
