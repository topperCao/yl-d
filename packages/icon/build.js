/** 自动将svg 文件夹下的文件，转为 React 组件 */
const fs = require('fs-extra');
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
    `./react-icon/${name}.tsx`,
    `export default (props) => {
  return ${svgContent}
}`,
  );
  indexContent.push(
    `export { default as ${componentName} } from './react-icon/${name}';`,
  );
});

fs.outputFile('index.ts', indexContent.join('\n'));
