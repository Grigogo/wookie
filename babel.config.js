module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src', // Папка, которую вы хотите сделать корневой
        rootPathPrefix: '@/', // Префикс, который вы будете использовать для импорта из корня
      },
    ],
  ],
};
