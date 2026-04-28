import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DocPage from '@/docs/system/components/DocPage';
import { getDocById, docsRegistry } from '@/docs/system/registry';
import Card from '@/shared/components/card/Card';
import '@/docs/system/pages/docPage.scss';

export default function Documentation() {
  const { docId } = useParams();
  
  if (!docId) {
    return (
      <div className="p-doc-overview">
        <Helmet>
          <title>Components Overview | React Lab</title>
          <meta name="description" content="Explore the shared UI components available in the ReactLab system." />
        </Helmet>
        <header className="p-doc-page__header">
          <h2 className="p-doc-page__title">Components Overview</h2>
          <p className="p-doc-page__description">
            Explore the shared UI components available in the ReactLab system.
          </p>
        </header>
        
        <div className="p-doc-overview__grid u-masonry-container">
          {docsRegistry.map((registry) => (
            <Card
              key={registry.id}
              title={registry.title}
              className="p-doc-overview__card"
              action={
                <Link 
                  to={`/docs/components/${registry.id}`} 
                  className="u-button-like u-button-like--primary u-button-like--sm"
                >
                  View Details
                </Link>
              }
            >
              <p className="p-doc-overview__description">{registry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const registry = getDocById(docId);

  if (!registry) {
    return (
      <div className="p-doc-page">
        <Helmet>
          <title>Documentation Not Found | React Lab</title>
        </Helmet>
        <header className="p-doc-page__header">
          <h2 className="p-doc-page__title">404</h2>
          <p className="p-doc-page__description">Documentation not found for "{docId}"</p>
        </header>
        <Link to="/docs" className="u-button-like u-button-like--primary">
          Back to Overview
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${registry.title} Component | React Lab`}</title>
        <meta name="description" content={registry.description || `Documentation and examples for the ${registry.title} component.`} />
      </Helmet>
      <DocPage registry={registry} />
    </>
  );
}
