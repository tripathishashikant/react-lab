import { Link, useMatches } from 'react-router-dom';

import Card from '@/shared/components/card/Card';

function UseStatePage() {
  const matches = useMatches();
  const { handle } = matches[matches.length - 1] || {};
  const { feature } = handle || {};
  const examples = feature?.examples || [];

  return (
    <div className="p-use-state">
      <div className="p-use-state__list u-masonry-container">
        {examples.map((example) => (
          <Card
            className="u-masonry-item"
            key={example.id}
            title={example.title}
            difficulty={example.difficulty}
            action={
              <Link to={example.path} className="u-button-like u-button-like--primary">
                View
              </Link>
            }
          >
            <p>{example.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UseStatePage;
