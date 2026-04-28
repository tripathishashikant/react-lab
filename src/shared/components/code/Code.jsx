import { useState, useEffect, lazy, Suspense } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';
import '@/shared/components/code/code.scss'

const LazyHighlighter = lazy(() => import('./LazyHighlighter'));

function Code({ code, language = 'jsx' }) {
  const [isCopied, setIsCopied] = useState(false);
  const [resolvedCode, setResolvedCode] = useState(() => {
    return typeof code === 'function' ? '' : (code || '');
  });

  useEffect(() => {
    if (typeof code !== 'function') {
      // If code is not a function, the state is already correctly initialized
      // via the useState initializer above. We only need to sync if it's a function.
      return;
    }

    let isMounted = true;
    code().then(val => {
      if (isMounted) setResolvedCode(val);
    });

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
