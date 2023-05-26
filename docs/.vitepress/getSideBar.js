import glob from 'glob';
import { sep } from 'path';

const getSideBar = (rootDir = './', options) => side(rootDir, options);

const side = (baseDir, options) => {
  const mdFiles = getChildren(baseDir, options?.ignoreMDFiles);
  const sidebars = [];
  mdFiles.forEach((filePath) => {
    const dirName = getDirName(filePath);
    const mdFileName = getName(filePath);
    const sidebarItemIndex = sidebars.findIndex((sidebar) => sidebar.text === dirName);
    if (sidebarItemIndex !== -1) {
      sidebars[sidebarItemIndex].items.push({
        text: mdFileName,
        link: filePath
      });
    } else {
      sidebars.push({
        text: dirName,
        items: [
          {
            text: mdFileName,
            link: filePath
          }
        ]
      });
    }
  });
  return sidebars;
};

// 处理 markdown 文件名
const getName = (path) => {
  let name = path.split(sep).pop() || path;
  const argsIndex = name.lastIndexOf('--');
  if (argsIndex > -1) {
    name = name.substring(0, argsIndex);
  }

  return name;
};

// 处理文件夹名
const getDirName = (path) => {
  let name = path.split(sep).shift() || path;
  name = name.replace(/^\d+[.\-_ ]?/, '');

  return name;
};

// 获取所有的 children
const getChildren = (parentPath, ignoreMDFiles = []) => {
  const pattern = '/**/*.md';
  // 查找指定目录下匹配的文件
  const files = glob.sync(parentPath + pattern).map((path) => {
    const newPath = path.slice(parentPath.length + 1, -3);
    if (ignoreMDFiles?.length && ignoreMDFiles.findIndex((item) => item === newPath) !== -1) {
      return undefined;
    }
    return { path: newPath };
  });
  return files.filter((item) => !!item).map((ele) => ele?.path || '');
};

module.exports = {
  getSideBar
};
