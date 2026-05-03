import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/shared/components/seo/SEO';

describe('SEO Component', () => {
  beforeEach(() => {
    document.title = 'Default Title';
  });

  it('updates document title from handle.seo', async () => {
    const routes = [
      {
        path: '/test',
        handle: { seo: { title: 'SEO Title' } },
        element: <SEO />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/test'] });

    render(
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe('SEO Title | React Lab');
    });
  });

  it('updates document title from handle.feature', async () => {
    const routes = [
      {
        path: '/feature',
        handle: { feature: { title: 'Feature Title' } },
        element: <SEO />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/feature'] });

    render(
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe('Feature Title | React Lab');
    });
  });

  it('updates meta description from handle.seo', async () => {
    const routes = [
      {
        path: '/desc',
        handle: { seo: { description: 'Custom Description' } },
        element: <SEO />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/desc'] });

    render(
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    );

    await waitFor(() => {
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription.getAttribute('content')).toBe('Custom Description');
    });
  });
});
