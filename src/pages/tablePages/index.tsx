import React, { useState } from 'react';
import styles from './index.less';
import {
  Table,
  Form,
  message,
  Button,
  Input,
  Popconfirm,
  notification,
} from 'antd';
import { connect } from 'umi';
import EditModal from './editComponents';

let pagination = { page: 0, size: 1 };
let loading = false;

const tablepage = ({ tables, dispatch }) => {
  const { Search } = Input;
  const [visible, setvisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [record, setrecord] = useState(undefined);
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
            <a
              className={styles.rigthspace}
              onClick={() => {
                onEditModal(record);
              }}
            >
              修改
            </a>

            <Popconfirm
              title="确定要删除？"
              onConfirm={() => {
                confirm(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <a>删除</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const handleOk = () => {
    setloading(true);
    setvisible(false);
    setloading(false);
  };
  const handleCancel = () => {
    setvisible(false);
  };
  const onEditModal = record => {
    setvisible(true);
    setrecord(record);
  };
  //删除
  const confirm = record => {
    setloading(true);
    const id = record.id;
    dispatch({
      type: 'tables/deleteListRemoto',
      payload: { id },
    });

    message.success('删除成功!');
    setvisible(false);
    setloading(false);
  };
  // 提交修改
  const onFinish = values => {
    setloading(true);

    let id = 0;
    if (record) {
      id = record.id;
    }

    if (id) {
      dispatch({
        type: 'tables/editListRemoto',
        payload: { values, id },
      });
      // .then(res => {
      //     if (res.code) {
      //         dispatch({
      //             type: "tables/getListRemoto",

      //         })
      //     }
      // })
      message.success('修改成功!');
    } else {
      dispatch({
        type: 'tables/addListRemoto',
        payload: { values, id },
      });
      // .then(res => {
      //     if (res.code) {
      //         dispatch({
      //             type: "tables/getListRemoto",

      //         })
      //     }
      // })
      message.success('添加成功!');
    }

    setvisible(false);
    setloading(false);
  };
  const handleEmail = value => {
    if (!/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/.test(value)) {
      notification['warning']({
        message: '输入邮箱形式不合法',
      });
    } else {
      message.success('查询成功!');
    }
  };
  return (
    <div className={styles.out}>
      <div className={styles.content}>
        <Form>
          <Form.Item
            rules={[
              {
                pattern: /^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$/,
                message: '请输入正确的邮箱!',
              },
            ]}
          >
            <Search
              type="text"
              placeholder="search"
              style={{ width: '20%' }}
              className={styles.rigthspace}
              onSearch={value => {
                handleEmail(value);
              }}
            />

            <Button
              className={styles.butStyle}
              onClick={() => {
                setvisible(true);
                setrecord(undefined);
              }}
            >
              新建
            </Button>
          </Form.Item>
        </Form>
        <Table
          columns={columns}
          dataSource={tables.data}
          loading={loading}
          pagination={false}
        />
        <EditModal
          visible={visible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          record={record}
          onFinish={onFinish}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ tables }) => {
  return {
    tables,
  };
};

export default connect(mapStateToProps)(tablepage);
