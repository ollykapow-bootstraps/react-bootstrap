const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common.js');

const getAddons = (addonArgs) => {
  const addons = Array.isArray(addonArgs)
    ? addonArgs
    : [addonArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./config/addons/webpack.${name}.js`));
}

module.exports = ({ env, addon }) => {
  const envConfig = require(`./config/webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
}
