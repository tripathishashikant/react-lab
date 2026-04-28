import Badge from '@/shared/components/badge/Badge';

export const badgeRegistry = {
  id: 'badge',
  title: 'Badge',
  description: 'Badges are used to highlight status, difficulty, or categories.',
  usage: 'Use badges to provide quick visual cues about the status or difficulty of an item. Currently implemented as difficulty indicators.',
  props: [
    {
      name: 'difficulty',
      type: 'easy | medium | difficult',
      defaultValue: 'none',
      description: 'The difficulty level to represent with an icon.'
    }
  ],
  examples: [
    {
      name: 'Difficulty Levels',
      description: 'Visual indicators for different difficulty levels.',
      render: () => (
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
          <Badge difficulty="easy" />
          <Badge difficulty="medium" />
          <Badge difficulty="difficult" />
        </div>
      ),
      code: `<Badge difficulty="easy" />
<Badge difficulty="medium" />
<Badge difficulty="difficult" />`
    }
  ]
};
