module.exports = {
  outputDir: 'build',
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
};
