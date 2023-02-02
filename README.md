
# Jest
$ yarn add --dev jest
$ npm install --save-dev jest

$ nano package.json
  ```
  "scripts": {
    "test": "jest"
  }
  ```

  $ npm test
  $ yarn test

  $ npm install --save-dev jest babel-jest @babel/preset-env 
  $ nano babel.config.js
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

# git
  $ git config --global user.email "you@example.com"
  $ git config --global user.name "Your Name"