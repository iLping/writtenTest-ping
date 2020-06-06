import React from 'react';
import styles from './index.less';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

export default () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
