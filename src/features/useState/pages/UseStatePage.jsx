import { Link, useMatches } from 'react-router-dom';

import Card from '@/shared/components/card/Card.jsx';
import { useShuffledArray } from '@/shared/hooks/useShuffledArray.js';

import '@/features/useState/pages/useState.scss';

function UseStatePage() {
  const matches = useMatches();
  const { handle } = matches[matches.length - 1] || {};
  const { feature } = handle || {};
  const examples = feature?.examples || [];

  const shuffledExamples = useShuffledArray(examples);

  return (
    <div className="p-use-state">
      <div className="p-use-state__list u-masonry-container">
        {shuffledExamples.map((example) => (
          <Card
            className="u-masonry-item"
            key={example.id}
            title={example.title}
            difficulty={example.difficulty}
            action={
              <Link to={example.path} className="c-button c-button--primary">
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
