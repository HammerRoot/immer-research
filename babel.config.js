module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)

  const isDev = /dev(elopment)?/.test(process.env.NODE_ENV)
  const chromeTarget = 43

  const plugins = [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/transform-runtime',
      {
        absoluteRuntime: false,
        regenerator: false,
        helpers: true,
        // This option has been deprecated from version 7.13.0
        useESModules: false,
      },
    ],
    isDev && 'react-refresh/babel',
  ].filter(Boolean)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: false,
          modules: false,
          targets: {
            chrome: chromeTarget - isDev, // 为了支持在QQ浏览器中运行 开发环境 代码
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins,
  }
}
