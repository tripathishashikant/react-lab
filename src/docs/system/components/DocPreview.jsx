import Code from '@/shared/components/code/Code';
import Card from '@/shared/components/card/Card';

export default function DocPreview({ name, description, render, code }) {
  return (
    <div className="c-doc-preview">
      <h5 className="c-doc-preview__title">{name}</h5>
      {description && <p className="c-doc-preview__description">{description}</p>}
      
      <Card className="c-doc-preview__card">
        <div className="c-doc-preview__demo">
          {render()}
        </div>
      </Card>

      <div className="c-doc-preview__code">
        <Code code={code.trim()} />
      </div>
    </div>
  );
}
