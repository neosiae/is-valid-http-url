const isUrl = require('../index');

describe('isUrl', () => {
  it('has valid URLs', () => {
    const validUrls = [
      'http://foo.com/blah_blah',
      'http://foo.com/blah_blah/',
      'http://foo.com/blah_blah_(wikipedia)',
      'http://foo.com/blah_blah_(wikipedia)_(again)',
      'http://www.example.com/wpstyle/?p=364',
      'https://www.example.com/foo/?bar=baz&inga=42&quux',
      'http://✪df.ws/123',
      'http://➡.ws/䨹',
      'http://⌘.ws',
      'http://⌘.ws/',
      'http://foo.com/blah_(wikipedia)#cite-1',
      'http://foo.com/blah_(wikipedia)_blah#cite-1',
      'http://foo.com/unicode_(✪)_in_parens',
      'http://foo.com/(something)?after=parens',
      'http://☺.damowmow.com/',
      'http://code.google.com/events/#&product=browser',
      'http://j.mp',
      'http://foo.bar/?q=Test%20URL-encoded%20stuff',
      'http://مثال.إختبار',
      'http://例子.测试',
      'http://उदाहरण.परीक्षा',
      'http://1337.net',
      'http://a.b-c.de',
      'http://папироска.рф',
      'http://a.b--c.de/',
      'https://g--a.com/',
      'http://example.com?foo=bar',
      'http://example.com.',
      'http://www.example.com#',
      'http://www.example.com./?#',
      'http://www.example.com?',
      'http://localhost',
      'http://localhost:1336',
      'https://localhost:1337/?#',
      'http://223.255.255.254',
      'http://142.42.1.1:8080/',
      'http://142.42.1.1/',
      'http://127.0.0.1',
      'http://127.0.0.1:1337',
      'http://10.1.1.1',
      'http://10.1.1.254',
      'http://192.168.0.5',
      'http://223.255.255.254',
    ]

    for (let url of validUrls) {
      expect(isUrl(url)).toBe(true);
    }
  });

  it('has invalid URLs', () => {
    const invalidUrls = [
      'http://',
      'http://.',
      'http://..',
      'http://../',
      'http://?',
      'http://??',
      'http://??/',
      'http://#',
      'http://##',
      'http://##/',
      'http://foo.bar?q=Spaces should be encoded',
      'foo.com',
      '//',
      '//a',
      '///a',
      '///',
      'http:///a',
      'http:// shouldfail.com',
      ':// should fail',
      'http://foo.bar/foo(bar)baz quux',
      'http://-error-.invalid/',
      'http://-a.b.co',
      'http://a.b-.co',
      'http://3628126748',
      'http://.www.foo.bar/',
      'http://.www.foo.bar./',
      'example.com',
      'example',
      '//example.com',
      'http://255.255.255.255',
      'http://0.0.0.0',
      'http://1.1.1.1.1',
      'http://224.0.0.0',
      'http://255.255.255.254',
      'http://253.255.2551.254',
      'http://223.255.255.255',
      'https://253.255',
      'http://253',
      'http://10.1.1.255',
      'http://234.255.255.254',
    ]

    for (let url of invalidUrls) {
      expect(isUrl(url)).toBe(false);
    }
  });
});