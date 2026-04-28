import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiClipboard, FiCheck } from 'react-icons/fi';
import '@/shared/components/code/code.scss'

function Code({ code, language = 'jsx' }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="c-code">
      <button
        onClick={handleCopy}
        className="c-code__button"
        title={isCopied ? "Copied!" : "Copy to clipboard"}
      >
        {isCopied ? <FiCheck /> : <FiClipboard />}
      </button>
      <SyntaxHighlighter language={language} style={materialDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
