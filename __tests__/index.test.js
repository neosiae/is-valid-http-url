const isUrl = require('../index');

describe('isUrl', () => {
  it('has valid URLs', () => {
    const validUrls = [
      'http://example.com',
      'https://example.com',
      'www.example.com',
      'example.com',
    ]

    for (let url of validUrls) {
      expect(isUrl(url)).toBe(true);
    }
  });

  it('has invalid URLs', () => {
    const invalidUrls = [
      'foo bar http://example.com',
      'foo bar https://example.com',
      'example.com foo bar',
      '//example.com',
    ]

    for (let url of invalidUrls) {
      expect(isUrl(url)).toBe(false);
    }
  });
});