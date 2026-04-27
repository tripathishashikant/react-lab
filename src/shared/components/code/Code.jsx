import { useState, useEffect, lazy, Suspense } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';
import '@/shared/components/code/code.scss'

const LazyHighlighter = lazy(() => import('./LazyHighlighter'));

function Code({ code, language = 'jsx' }) {
  const [isCopied, setIsCopied] = useState(false);
  const [resolvedCode, setResolvedCode] = useState('');

  useEffect(() => {
    let isMounted = true;

    if (typeof code === 'function') {
      code().then(val => {
        if (isMounted) setResolvedCode(val);
      });
    } else {
      setResolvedCode(code || '');
    }

    return () => {
      isMounted = false;
    };
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolvedCode);
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
      <Suspense fallback={<div className="c-code__loading">Loading code viewer...</div>}>
        <LazyHighlighter language={language}>
          {resolvedCode}
        </LazyHighlighter>
      </Suspense>
    </div>
  )
}

export default Code
