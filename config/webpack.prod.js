const path = require('path');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new DeviceOrientationEvent({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
  devtool: 'source-map',
};
