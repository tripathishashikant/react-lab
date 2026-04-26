import Loader from '@/shared/components/loader/Loader';

export const loaderRegistry = {
  id: 'loader',
  title: 'Loader',
  description: 'Loaders indicate that an operation is in progress.',
  usage: 'Use loaders to provide visual feedback during data fetching or processing. Can be used in-place or as a full-screen overlay.',
  props: [
    {
      name: 'variant',
      type: 'spinner',
      defaultValue: 'spinner',
      description: 'The visual type of loader.'
    },
    {
      name: 'size',
      type: 'sm | md | lg',
      defaultValue: 'md',
      description: 'The size of the loader.'
    },
    {
      name: 'fullScreen',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the loader should cover the entire screen.'
    }
  ],
  examples: [
    {
      name: 'Sizes',
      description: 'Loaders come in three sizes: small, medium (default), and large.',
      render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </div>
      ),
      code: `<Loader size="sm" />
<Loader size="md" />
<Loader size="lg" />`
    }
  ]
};
