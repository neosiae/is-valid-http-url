module.exports = (url) => {
  const typeOfUrl = typeof url;

  if (typeOfUrl !== 'string') {
    throw new TypeError(`
      URL type is invalid. Expected a string, but got: ${typeOfUrl}
    `);
  }

  const protocol = '(?:(?:https?)://)?';
  const ipv4 = '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
  const hostname = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
  const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
  const tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))';
  const port = '(?::\\d{2,5})?';
  const resourcePath = '(?:[/?#]\\S*)?';
  const regex = `${protocol}(?:localhost|${ipv4}|${hostname}${domain}${tld}\\.?)${port}${resourcePath}`;
  const isUrl = new RegExp(`^${regex}$`, 'i');

  return isUrl.test(url);
}
