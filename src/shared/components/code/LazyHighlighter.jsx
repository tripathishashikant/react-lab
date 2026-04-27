import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function LazyHighlighter({ language, children }) {
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {children}
    </SyntaxHighlighter>
  );
}
