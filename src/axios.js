import axios from 'axios';
import qs from 'qs';
import React from 'react';
import router from '@/router';
import errorCode from './errorCode';
import { message, notification } from 'antd';

const setCookie = expire => {
  var date = new Date();
  document.cookie =
    'csrf_token' + '=' + 'aliyuntest' + '; expires=' + date.toGMTString();
};

// http request 拦截器
axios.interceptors.request.use(async config => {
  if (config.method != 'get' && config.method != 'put') {
    if (!(config.data instanceof FormData)) {
      config.data = qs.stringify(config.data);
    }
  }

  return config;
});

axios.interceptors.response.use(
  async res => {
    const status = Number(res.status) || 200;
    setCookie();
    const message = res.data.msg || errorCode[status] || errorCode['default'];
    if (status === 401) {
      message.error({ content: message });
      notification.error({
        title: '错误提示',
        desc: message,
      });

      return;
    }
    if (status !== 200 || res.data.code === 1) {
      notification.error({
        title: '错误提示',
        desc: message,
      });
      return Promise.reject(new Error(message));
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

export default axios;
