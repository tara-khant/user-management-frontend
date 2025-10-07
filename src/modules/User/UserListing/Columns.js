import { Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const columns = ({ onDelete, onClickListItem, onEdit }) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 70,
    render: (text, record) => (
      <span
        className="text-blue-500 cursor-pointer hover:underline"
        onClick={(e) => {
          e.stopPropagation();
          onClickListItem(record.id);
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role) => <span className="capitalize">{role}</span>,
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (avatar) => (
      <img
        src={avatar}
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div className="flex gap-2 justify-center">
        <EditOutlined
          className="text-blue-500 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(record.id);
          }}
        />

        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={(e) => {
            e.stopPropagation();
            onDelete(record.id);
          }}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined
            className="text-red-500 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </Popconfirm>
      </div>
    ),
  },
];
