import { CopyToClipboard } from '@yl-d/design';
import { IconCopy } from '@yl-d/icon';
import CodeEditor from '..';
import './index.less';

interface HighlightProps {
  value?: string;
  language?: string;
  [key: string]: any;
}

export default ({ value, language }: HighlightProps) => {
  return (
    <div className="monaco-component monaco-editor-syntax-highlight">
      <div className="monaco-editor-syntax-highlight-header">
        <CopyToClipboard text={value} message>
          <IconCopy style={{ color: '#aaa' }} />
        </CopyToClipboard>
      </div>
      <div className="monaco-editor-syntax-highlight-body">
        <CodeEditor
          value={value}
          language={
            ['ts', 'js', 'tsx', 'jsx'].includes(language)
              ? 'javascript'
              : language
          }
          minimapEnabled={false}
          style={{ height: value.split('\n').length * 18 }}
          scrollBeyondLastLine={false}
          lineNumbers="off"
          folding={false}
          scrollbar={{
            handleMouseWheel: false,
          }}
          contextmenu={false}
          hover={{
            enabled: false,
          }}
          readOnly
        />
      </div>
    </div>
  );
};
