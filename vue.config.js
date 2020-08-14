const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'build',
  assetsDir: 'assets',
  lintOnSave: true,
  integrity: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '关于我，Kinetix',
    },
  },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('webp')
  //     .test(/\.webp$/)
  //     .include.add(resolve('src/assets/images'))
  //     .end();
  // },
};
