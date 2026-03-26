import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code({ code, language = 'jsx' }) {
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Code
