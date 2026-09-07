import { describe, expect, it } from 'vitest';
import { faqs, features, nav } from './site';

describe('SYMKART foundation content', () => {
  it('keeps the primary navigation and shared content contracts', () => {
    expect(nav.map(([label]) => label)).toEqual([
      'About',
      'SYMKART',
      'Pricing',
      'FAQ',
      'Contact',
    ]);
    expect(features).toHaveLength(3);
    expect(faqs.length).toBeGreaterThan(0);
  });
});
