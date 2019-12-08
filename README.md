# vue-axios-cors
This is http client vue.js plugin for cross origin access without preflight. It will automatically convert application/json to simple request (application/x-www-form-urlencoded).

## Details
- `POST` and `PUT` method will be converted.
- HTTP Header: 
  - before: application/json
  - after: application/x-www-form-urlencoded
- What you have to do on your server:
  - Allow CORS Access
  - Add middleware to convert formdata to json data


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
        method: 'POST',
        data: {
          email: 'user@example.com',
          password: 'pasw0rd'
        }
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
