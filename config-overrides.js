const path = require('path');
const { merge } = require('lodash');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  // console.log(config.module.rules[1]);
  // throw new Error('Stop!');

  const stylusRules = {
    test: /\.styl$/,
    use: [
      { loader: 'style-loader', options: { sourceMap: true } },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 2,
          localIdentName: '[folder]--[local]--[hash:base64:2]'
        }
      },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      { loader: 'stylus-loader', options: { sourceMap: true } }
    ]
  };

  const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);
  if (oneOfRule) {
    oneOfRule.oneOf.unshift(stylusRules);
  } else {
    // Fallback to previous behaviour of adding to the end of the rules list.
    config.module.rules.push(stylusRules);
  }

  return merge(config, {
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src')
      }
    }
  });
};
