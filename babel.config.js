module.exports = {
  ignore: [
    'src/**/*.test.ts', 'src/**/*.test.js',
    'src/**/*.spec.ts', 'src/**/*.spec.js' 
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@domain/*': './src/domain',
        '@application/*': './src/application',
        '@infra/*': './src/infra',
        '@main/*': './src/main'
      }
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],

  ]
}