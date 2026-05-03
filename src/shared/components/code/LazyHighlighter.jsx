import { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AppContext from '@/app/context/AppContext';
import { THEMES } from '@/shared/constants/theme';

export default function LazyHighlighter({ language, children }) {
  const { theme } = useContext(AppContext);
  const style = theme === THEMES.DARK ? materialDark : materialLight;

  return (
    <SyntaxHighlighter 
      language={language} 
      style={style}
      codeTagProps={{
        style: {
          background: 'transparent'
        }
      }}
      customStyle={{
        background: 'transparent',
        padding: 0,
        margin: 0,
        fontSize: 'var(--text-sm)',
        lineHeight: '1.6'
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
