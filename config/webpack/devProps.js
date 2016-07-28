const host = '0.0.0.0';
const webpackPort = 9095;

module.exports = {
  host,
  webpackPort,
  baseUrl: `http://${host}:${webpackPort}`
};
