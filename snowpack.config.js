module.exports = {
  mount: {
    public: '/',
    src: '/src',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-webpack',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    clean: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
