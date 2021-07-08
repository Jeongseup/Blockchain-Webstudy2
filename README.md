# Blockchain-Webstudy2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### etc
MEMO
- vue.config.js
```
module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "/oauth2.0": {
                target: "https://nid.naver.com",
            },
        },
    },
};

```
