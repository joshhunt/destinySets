const path = require('path');
const { merge } = require('lodash');
const { getLoader } = require('react-app-rewired');

module.exports = function override(config, env) {
  console.log('env:', env);

  const cssLoader = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  );

  let stylusRules;

  if (env === 'development') {
    stylusRules = {
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
  } else {
    const cssExtractTextLoader = cssLoader.loader[0];
    if (!cssExtractTextLoader.loader.includes('extract-text-webpack-plugin')) {
      throw new Error('Unable to find extract-text loader for CSS, aborting');
    }

    stylusRules = {
      test: /\.styl$/,
      use: [
        cssExtractTextLoader,
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
  }

  const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);
  if (oneOfRule) {
    oneOfRule.oneOf.unshift(stylusRules);
  } else {
    // Fallback to previous behaviour of adding to the end of the rules list.
    config.module.rules.push(stylusRules);
  }

  // throw 'Stopping';

  return merge(config, {
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src')
      }
    }
  });
};
