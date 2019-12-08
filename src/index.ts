import _Vue from 'vue';
import axios from 'axios';
import * as qs from 'qs';

axios.interceptors.request.use(config => {
  if (
    config.method &&
    (config.method.toLocaleLowerCase() === 'post' ||
      config.method.toLocaleLowerCase() === 'put')
  ) {
    config.headers['content-type'] =
      'application/x-www-form-urlencoded;charset=utf-8';
    config.data = qs.stringify(config.data);
  }

  return config;
});

export default {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$axios = axios;
  }
};
