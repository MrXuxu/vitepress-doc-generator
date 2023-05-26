const path = require('path');

const MD_DIR = 'doc';

module.exports = {
  // markdowns 生成的文件夹名称
  MD_DIR,
  // src 文件夹
  srcDirPath: path.join(__dirname, '../src'),
  // markdown 生成的文件夹
  mdDirPath: path.join(__dirname, '../docs', MD_DIR),
  // jsdoc 配置文件
  jsdocConfigPath: path.join(__dirname, 'jsdoc2md', 'jsdoc.config.json'),
  // hbs 模板文件：用于配置生成的 markdown：语法见：https://github.com/jsdoc2md/dmd
  mdTemplatePath: path.join(__dirname, 'jsdoc2md', 'template.hbs')
};
