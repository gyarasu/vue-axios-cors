"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const qs = require("qs");
axios_1.default.interceptors.request.use(config => {
    if (config.method &&
        (config.method.toLocaleLowerCase() === 'post' ||
            config.method.toLocaleLowerCase() === 'put')) {
        config.headers['content-type'] =
            'application/x-www-form-urlencoded;charset=utf-8';
        config.data = qs.stringify(config.data);
    }
    return config;
});
exports.default = {
    install(Vue) {
        Vue.prototype.$axios = axios_1.default;
    }
};
//# sourceMappingURL=index.js.map