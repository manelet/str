export default {
  comments: false,
  'presets': [
    ['@babel/preset-env',
      { 'modules': false
      }
    ]
  ],
  'plugins': [
    ['@babel/plugin-transform-modules-commonjs'],
    'add-module-exports',
    ['babel-plugin-transform-import-paths', {
      '../': './'
    }]
  ]
}
