import AppProvider from '@/app/context/AppProvider';
import ThemeSwitcher from '@/shared/components/theme-switcher';
import { THEMES } from '@/shared/constants/theme';

const localStorageMock = (function() {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('ThemeSwitcher Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders correctly based on theme prop', () => {
    render(<ThemeSwitcher theme={THEMES.LIGHT} onToggle={() => {}} />);
    const button = screen.getByRole('button', { name: /toggle/i });
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onToggle when clicked', () => {
    const onToggle = jest.fn();
    render(<ThemeSwitcher theme={THEMES.LIGHT} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('integrates with AppProvider for state persistence', () => {
    localStorage.getItem.mockReturnValue(THEMES.DARK);
    render(
      <AppProvider>
        <ThemeSwitcher theme={THEMES.DARK} onToggle={() => {}} />
      </AppProvider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', THEMES.DARK);
  });
});
