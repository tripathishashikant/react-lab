import { alertRegistry } from '@/docs/system/registry/alert/index';

describe('Alert Registry', () => {
  it('should have a valid metadata structure', () => {
    expect(alertRegistry).toHaveProperty('id', 'alert');
    expect(alertRegistry).toHaveProperty('title', 'Alert');
    expect(Array.isArray(alertRegistry.props)).toBe(true);
    expect(Array.isArray(alertRegistry.examples)).toBe(true);
  });

  it('should define core variants in examples', () => {
    const variants = alertRegistry.examples.map(ex => ex.name.toLowerCase());
    expect(variants).toContain('information');
    expect(variants).toContain('success');
    expect(variants).toContain('warning');
    expect(variants).toContain('error');
  });
});
