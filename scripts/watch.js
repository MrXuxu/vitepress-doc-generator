const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { srcDirPath } = require('./config');

let timer = null;
const delay = 200; // 延迟执行的时间，单位为毫秒

const transformCommentToMarkdown = () => {
  exec('npm run jsdoc2md', (error) => {
    if (error) {
      console.error(`Error occurred while running npm run jsdoc2md: ${error.message}`);
    }
  });
};

fs.watch(srcDirPath, { recursive: true }, (_eventType, filename) => {
  console.log(`${filename} changed...`);

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    transformCommentToMarkdown();
  }, delay);
});
