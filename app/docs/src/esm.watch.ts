import * as chokidar from 'chokidar';
import chalk from 'chalk';
import { build } from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';
import { externalGlobalPlugin } from 'esbuild-plugin-external-global';
import { ConfigProps } from './type';

export default (rootPath: string, config: ConfigProps) => {
  const runEsmBuild = () => {
    build({
      target: 'esnext',
      format: 'esm',
      platform: 'browser',
      outdir: 'esm',
      bundle: true,
      minify: true,
      logLevel: 'info',
      entryPoints: ['src/index.ts'],
      plugins: [
        lessLoader(),
        externalGlobalPlugin({
          react: 'window.React',
          'react-dom': 'window.ReactDOM',
          '@arco-design/web-react': 'window.arco',
          '@arco-design/web-react/icon': 'arcoicon',
          ...config.externalESM,
        }),
      ],
    });
  };
  /** 监听 src 文件改动 */
  const watcher = chokidar.watch([`${rootPath}/src/**/*`], {
    ignored: /node_modules/,
    ignoreInitial: true,
  });
  watcher.on('change', async (file) => {
    console.log(chalk.green(`  file change. ${file}`));
    runEsmBuild();
  });
  watcher.on('add', async (file) => {
    console.log(chalk.green(`  file change. ${file}`));
    runEsmBuild();
  });
  runEsmBuild();
};
