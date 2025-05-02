export default {
  plugins: {
    "@daltontan/postcss-import-json": {
      path: ['src/style/theme '],
      expand: true,
      prefix: 'abbes'
    },
  },
};
