import { Outlet, useMatches, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Button from '@/shared/components/button/Button';

import '@/layouts/featureLayout/featureLayout.scss';


const FeatureLayout = () => {
  const matches = useMatches();
  const navigate = useNavigate();

  const { handle } = matches[matches.length - 1] || {};
  const { feature, example } = handle || {};
  const { title, description } = example || feature || {};

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="feature__layout">
      <div className="feature__header">
        <section className="feature__info">
          <h1 className="feature__title">{title}</h1>
          {description && <p className="feature__description">{description}</p>}
        </section>
        {example && <Button tabindex='0' variant='icon' title='Click to go back' onClick={handleGoBack} className='feature__go-back-icon'><FiChevronLeft /></Button>}
      </div>
      <div className="feature__content">
        <Outlet />
      </div>
    </div>
  );
};

export default FeatureLayout;
