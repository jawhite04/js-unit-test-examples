const getApiKey = () => (process.env.NODE_ENV === 'production' ? 'the production API key' : 'the development API key');

module.exports = { getApiKey };
