// const { execSync } = require('child_process');


module.exports = {
  chainWebpack: config => {
    [
      'api',
      'assets',
      'components',
      'filters',
      'layouts',
      'router',
      'store',
      'utils',
      'views',
    ].forEach(item => {
      config.resolve.alias.set(`@${item}`, `${__dirname}/src/${item}`);
    });
  },

  devServer: {
  //   port: 8081,
    disableHostCheck: true,
  },
};
