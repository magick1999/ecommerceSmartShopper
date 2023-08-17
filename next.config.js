const withLess = require('next-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
        ],
      });
    }
    return config;
  },
  env: {
    PUBLIC_URL: '',
  },
});
