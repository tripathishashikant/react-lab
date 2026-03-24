import { Outlet, useMatches } from 'react-router-dom';
import './featureLayout.scss';

const FeatureLayout = () => {
  const matches = useMatches();
  const { handle } = matches[matches.length - 1] || {};
  const { feature, example } = handle || {};
  const { title, description } = example || feature || {};

  return (
    <div className="feature-layout">
      <div className="feature-header">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <div className="feature-content">
        <Outlet />
      </div>
    </div>
  );
};

export default FeatureLayout;
