import { defineConfig } from 'vitepress';
import { MD_DIR } from '../../scripts/config';
import { version } from '../../package.json';
import { getSideBar } from './getSideBar';

function addLinkPrefix(arr, prefix) {
  return arr.map((obj) => {
    if (obj.items) {
      obj.items = addLinkPrefix(obj.items, prefix);
    } else {
      obj.link = prefix + obj.link;
      obj.nextLink = false;
    }
    return obj;
  });
}

const sideList = addLinkPrefix(getSideBar(`./docs/${MD_DIR}`), `/${MD_DIR}/`);

export default defineConfig({
  title: `utils@${version}`,
  base: '/',

  themeConfig: {
    nav: [
      { text: 'API 文档', link: '/doc/encryption/rsa-encrypt' },
      { text: '开发指南', link: '/guide/start' }
    ],
    sidebar: {
      [`/${MD_DIR}/`]: sideList
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
});
