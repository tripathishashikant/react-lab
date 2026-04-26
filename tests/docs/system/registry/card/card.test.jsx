import { cardRegistry } from '@/docs/system/registry/card/index';

describe('Card Registry', () => {
  it('should have a valid metadata structure', () => {
    expect(cardRegistry).toHaveProperty('id', 'card');
    expect(cardRegistry).toHaveProperty('title', 'Card');
    expect(Array.isArray(cardRegistry.props)).toBe(true);
    expect(Array.isArray(cardRegistry.examples)).toBe(true);
  });

  it('should define basic card example', () => {
    const exampleNames = cardRegistry.examples.map(ex => ex.name);
    expect(exampleNames).toContain('Basic Card');
  });
});
