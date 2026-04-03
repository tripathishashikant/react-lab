import { useState } from 'react';
import '@/docs/styleguide/pages/styleguide.scss';

import StyleguideSection from '@/docs/styleguide/components/StyleguideSection';
import { getStyleguideSections } from '@/docs/styleguide/config/sections';

export default function StyleguidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sections = getStyleguideSections({ isModalOpen, setIsModalOpen });

  return (
    <div className="p-styleguide">
      <div className="p-styleguide__grid u-masonry-container">
        {sections.map((section) => (
          <StyleguideSection
            key={section.id}
            title={section.title}
            renderDemo={section.renderDemo}
          />
        ))}
      </div>
    </div>
  );
}
