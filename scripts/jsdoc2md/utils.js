const fs = require('fs');
const path = require('path');
const {srcDirPath, mdDirPath} = require('../config');

// 获取 src 所有子目录文件名
function getSubDirectories(dirPath) {
  const subDirectories = [];

  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      subDirectories.push(dirent.name);
    }
  });

  return subDirectories;
}

// 获取 entries
function getEntries() {
  const subDirectories = getSubDirectories(srcDirPath);
  return subDirectories.map((name) => {
    return {
      root: path.join(srcDirPath, `/${name}`),
      output: path.join(mdDirPath, `/${name}`)
    };
  });
}

module.exports = {
  getEntries
};
