import React from 'react';
import styles from './index.less';
import { Table, Tag, Space, Button, Input, Popconfirm, Pagination } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 80,
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
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '省份',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: '爱好',
    dataIndex: 'like',
    key: 'like',
    render: (text, record) => {
      if (!record.like || record.like.length === 0) return;
      const likeArr = record.like.split(',');
      return `${likeArr.join(' | ')}`;
    },
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (text, record) => {
      return (
        <div>
          <a className={styles.rigthspace}>修改</a>

          <Popconfirm title="确定要删除？" okText="Yes" cancelText="No">
            <a href="#">删除</a>
          </Popconfirm>
        </div>
      );
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    id: 32,
    like: 'New York No,1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    like: 'New , Lake Park',
    tags: ['nice', 'developer'],
  },
];
let pagination = { page: 0, size: 1 };
let loading = false;

export class tablepage extends React.Component {
  render() {
    return (
      <div className={styles.out}>
        <div className={styles.content}>
          <Input
            placeholder="search"
            style={{ width: '20%' }}
            className={styles.rigthspace}
          />

          <Button className={styles.butStyle}>新建</Button>
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={false}
          />
          <Pagination
            defaultCurrent={1}
            total={50}
            className={styles.paginStyle}
          />
        </div>
      </div>
    );
  }
}
export default tablepage;
