export default ({ code, language }) => {
  const {
    lyrCodeEditor: { CodeEditor },
  } = window as any;
  const theme = (window as any).monacoTheme || 'vs';
  return (
    <CodeEditor
      mode="syntax-highlight"
      value={code}
      language={language}
      theme={theme}
    />
  );
};
