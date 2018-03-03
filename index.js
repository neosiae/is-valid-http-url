module.exports = (url) => {
  const typeOfUrl = typeof url;

  if (typeOfUrl !== 'string') {
    throw new TypeError(`
      URL type is invalid. Expected a string, but got: ${typeOfUrl}
    `);
  }
  
  const protocol = '(?:(?:https?)://)';
  const ipv4 = '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))';
  const hostname = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
  const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
  const tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))';
  const port = '(?::\\d{2,5})?';
  const resourcePath = '(?:[/?#]\\S*)?';
  const regex = `${protocol}(?:localhost|${ipv4}|${hostname}${domain}${tld}\\.?)${port}${resourcePath}`;
  const isUrl = new RegExp(`^${regex}$`, 'i');

  return isUrl.test(url);
}
