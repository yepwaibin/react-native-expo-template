module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      // 确保 TypeScript 被正确转译
      ['@babel/preset-typescript', { allowDeclareFields: true }],
    ],
    plugins: [],
  };
};
