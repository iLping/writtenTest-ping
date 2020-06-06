import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';

const EditModal = props => {
  const [form] = Form.useForm();
  const { visible, record, handleCancel, onFinish } = props;
  useEffect(() => {
    form.setFieldsValue(props.record);
    if (record === undefined) form.resetFields();
  }, [props.visible]);

  const handleOk = () => {
    form.submit();
  };

  const onFinishFailed = values => {};
  return (
    <div>
      <Modal
        title={`${record && record.id ? '修改' : '添加'}信息`}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <Form
          name="basic"
          initialValues={record}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: '用户名不能为空!' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ type: 'email', message: '请输入正确的邮箱!' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item name="sex" label="性别">
            <Select placeholder="请选择性别">
              <Select.Option>请选择</Select.Option>
              <Select.Option value="man">男</Select.Option>
              <Select.Option value="girl">女</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="省份" name="province">
            <Input placeholder="请输入省份" />
          </Form.Item>
          <Form.Item label="爱好" name="like">
            <Input placeholder="请输入爱好" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default EditModal;
