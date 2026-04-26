import { buttonRegistry } from '@/docs/system/registry/button/index';

describe('Button Registry', () => {
  it('should have a valid metadata structure', () => {
    expect(buttonRegistry).toHaveProperty('id', 'button');
    expect(buttonRegistry).toHaveProperty('title', 'Button');
    expect(Array.isArray(buttonRegistry.props)).toBe(true);
    expect(Array.isArray(buttonRegistry.examples)).toBe(true);
  });

  it('should define all core variants in examples', () => {
    const variants = buttonRegistry.examples.map(ex => ex.name.toLowerCase());
    expect(variants).toContain('primary');
    expect(variants).toContain('secondary');
    expect(variants).toContain('ghost');
  });
});
