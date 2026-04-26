import DocPropsTable from '@/docs/system/components/DocPropsTable';
import DocPreview from '@/docs/system/components/DocPreview';

export default function DocPage({ registry }) {
  if (!registry) return null;

  return (
    <div className="p-doc-page">
      <header className="p-doc-page__header">
        <h2 className="p-doc-page__title">{registry.title}</h2>
        <p className="p-doc-page__description">{registry.description}</p>
      </header>

      <section className="p-doc-page__section">
        <h3 className="p-doc-page__section-title">Usage</h3>
        <div className="p-doc-page__usage">
          <p>{registry.usage}</p>
        </div>
      </section>

      <section className="p-doc-page__section">
        <h3 className="p-doc-page__section-title">Examples</h3>
        <div className="p-doc-page__examples">
          {registry.examples.map((example, index) => (
            <DocPreview key={index} {...example} />
          ))}
        </div>
      </section>

      {registry.props && (
        <section className="p-doc-page__section">
          <DocPropsTable props={registry.props} />
        </section>
      )}
    </div>
  );
}
