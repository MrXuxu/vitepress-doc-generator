const fs = require('fs-extra');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
const ora = require('ora');
const { getEntries } = require('./utils');
const { jsdocConfigPath, mdTemplatePath, mdDirPath } = require('../config');

const template = fs.readFileSync(mdTemplatePath, 'utf-8');

const generateMarkdown = async () => {
  const loading = ora('Generates Markdown');
  try {
    await deleteDirectory(mdDirPath);
    const markdownDirs = getEntries();

    await Promise.all(
      markdownDirs.map(async (sourceObject) => {
        const { root, output, ingoreList = [] } = sourceObject;
        await generateMarkDownForFiles(root, output, ingoreList);
      })
    );
    loading.succeed('Generates Markdown success');
  } catch (error) {
    loading.fail(`Generates Markdown fail: ${error}`);
  }
};

const generateMarkDownForFiles = async (root, output, ingoreList) => {
  const fileList = await fs.readdir(root);
  await Promise.all(
    fileList.map(async (fileName) => {
      if (ingoreList.indexOf(fileName) === -1) {
        await generateMarkdownDocs(fileName, root, output);
      }
    })
  );
};

/**
 * 生成 markdown
 * @param sourceName 目标文件名
 * @param sourceRootPath 目标文件所在文件夹名
 * @param outputPath 生成文件所在文件夹名
 * @return {Promise<void>}
 */
const generateMarkdownDocs = async (sourceName, sourceRootPath, outputPath) => {
  let sourcePath = `${sourceRootPath}/${sourceName}`;
  const outputName = sourceName.replace('.js', '').replace('.ts', '');
  const loading = ora(`Generates Markdown for ${sourcePath}`);
  try {
    if (outputName === 'index') return;

    const mdStr = await jsdoc2md.render({
      template: template,
      'example-lang': 'javascript',
      files: path.resolve(process.cwd(), sourcePath),
      'name-format': 'backticks',
      'heading-depth': 2,
      'module-index-format': 'none',
      configure: jsdocConfigPath
    });

    if (mdStr) {
      fs.outputFile(path.resolve(process.cwd(), `${outputPath}/${outputName}.md`), mdStr);
    }
  } catch (error) {
    loading.fail(`Generates Markdown fail for ${sourcePath}: ${error}`);
  }
};

// 删除指定目录
async function deleteDirectory(dirPath) {
  try {
    await fs.remove(dirPath);
    console.log(`Directory ${dirPath} deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting directory ${dirPath}: ${err}`);
  }
}

generateMarkdown();
