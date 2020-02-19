import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { gaussian } from '..';

expect.extend({ toBeDeepCloseTo });

describe('Normalization', () => {
  it('gaussian', () => {
    let vector = gaussian({ factor: 50 });
    let area = vector.reduce((a, b) => a + b, 0);
    expect(area).toBeDeepCloseTo(1, 2);
  });
});