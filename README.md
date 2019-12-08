# vue-axios-cors
This is http client vue.js plugin for cross origin access without preflight. It will automatically convert application/json to simple request (application/x-www-form-urlencoded).

## Installation
```bash
$ yarn add vue-axios-cors
```

## Usage
```main.js
import Vue from 'vue'
import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin)
```


```App.vue
<script>
export default {
  methods: {
    login() {
      const options = {
        url: 'https://yourdomain.com/login',
        method: 'POST'
      }
      this.$axios(options)
      .then((res) => {
        console.log('Login suceeded!')
      })
      .catch((err) => {
        console.error('Login failed.');
      })
    }
  }
}
</script>
```
