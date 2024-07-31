/** 自动将svg 文件夹下的文件，转为 React 组件 */
const fs = require('fs-extra');
const chalk = require('chalk');
const glob = require('glob');
const { optimize } = require('svgo');

const config = {
  plugins: [
    'removeUnknownsAndDefaults',
    'cleanupAttrs',
    'removeXMLNS',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'none',
          },
          {
            stroke: 'currentColor',
          },
          '{...props}',
        ],
      },
    },
  ],
};

function getCamelString(name) {
  return `Icon${name
    .replace(/-([a-zA-Z])/g, (g) => g[1].toUpperCase())
    .replace(/^./, (g) => g.toUpperCase())}`;
}
const svgs = glob.sync('./svg/*.svg');

const indexContent = [];
const docContent = [];

svgs.forEach((svgPath) => {
  const name = svgPath.slice(4, -4);
  const svgCode = fs.readFileSync(svgPath).toString();
  const svgContent = optimize(svgCode, { path: svgPath, ...config })
    .data.replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/class=/g, 'className=');
  const componentName = getCamelString(name);
  fs.outputFile(
    `./src/react-icon/${name}.tsx`,
    `const ${componentName} = (props) => {
  return ${svgContent}
};

export default ({ size = 16, ...rest }) => {
  return <${componentName} width={size} height={size} class="yld-icon yld-icon-${name}" {...rest} />;
};
    `,
  );
  indexContent.push(
    `export { default as ${componentName} } from './react-icon/${name}';`,
  );
  docContent.push(componentName);
});

fs.outputFile(
  './src/doc.md',
  `## 基本用法

\`\`\`jsx | pureReact
import { CopyToClipboard } from '@yl-d/design';
import { ${docContent.join(', ')} }  from '@yl-d/icon';

export default () => {
  return <div className="yld-icon-demo-wrap">
    ${docContent
      .map((item) => {
        return `<CopyToClipboard message text="<${item} />">
          <div className="yld-icon-demo-wrap-icon">
            <span style={{ padding: 13 }}>${item}</span>
            <${item} size={32} />
          </div>
        </CopyToClipboard>`;
      })
      .join('\n')}
  </div>
}
\`\`\`

## 设置大小和颜色

\`\`\`jsx | react
import { IconCalendar } from '@yl-d/icon';

export default () => {
  return <IconCalendar size={40} color="#165dff" />
};
\`\`\`
`,
);

fs.outputFile('./src/index.ts', indexContent.join('\n'));

console.log(chalk.green('--- update react-icon done! ----'));
