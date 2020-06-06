// 请求列表
// import axios from '@/axios'
export const getListRemoto = async params => {
  const data = [
    {
      key: '1',
      id: 1,
      name: 'aaaaa',
      email: 'llll@qq.com',
      sex: '女',
      province: '辽宁',
      like: 'New York No,1 Lake Park',
    },
    {
      key: '2',
      id: 2,
      name: 'bbbbb',
      email: 'kkkkkl@qq.com',
      sex: '男',
      province: '浙江',
      like: '游泳,马拉松,游戏,吉他',
    },
  ];
  return data;
};

//提交新建
export const addListRemoto = async params => {
  const data = [
    {
      key: '1',
      id: 1,
      name: 'aaaaa',
      email: 'llll@qq.com',
      sex: '女',
      province: '辽宁',
      like: 'New York No,1 Lake Park',
    },
    {
      key: '2',
      id: 2,
      name: 'bbbbb',
      email: 'kkkkkl@qq.com',
      sex: '男',
      province: '浙江',
      like: '游泳,马拉松,游戏,吉他',
    },
    {
      key: '3',
      id: 3,
      name: '添加test',
      email: 'kkkkkl@qq.com',
      sex: '男',
      province: '浙江',
      like: '游泳,马拉松,游戏,吉他',
    },
    {
      key: '4',
      id: 4,
      name: '添加test',
      email: 'kkkkkl@qq.com',
      sex: '男',
      province: '浙江',
      like: '游泳,马拉松,游戏,吉他',
    },
  ];
  return data;
  return params;
};
//提交修改
export const editListRemoto = async ({ id, values }) => {
  const data = [
    {
      key: '1',
      id: 1,
      name: '修改查询twwwwww',
      email: 'llll@qq.com',
      sex: '女',
      province: '辽宁',
      like: 'New York No,1 Lake Park',
    },
    {
      key: '2',
      id: 2,
      name: 'e修改查询3333',
      email: 'kkkkkl@qq.com',
      sex: '男',
      province: '浙江',
      like: '游泳,马拉松,游戏,吉他',
    },
  ];
  return data;
};

// 删除
export const deleteListRemoto = async id => {
  const data = [
    {
      key: '1',
      id: 1,
      name: 'wwwwww',
      email: 'llll@qq.com',
      sex: '女',
      province: '辽宁',
      like: 'New York No,1 Lake Park',
    },
  ];
  return { data };
};
