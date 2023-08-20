module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // config.module.rules.push({
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // });

      config.module.rules.push({
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader', // or MiniCssExtractPlugin.loader if you want to extract styles to a separate CSS file
          'css-loader',
          'sass-loader',
        ],
      });

      config.module.rules.push({
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ["@babel/preset-react", {runtime: "automatic"}]
            ]
          }
        }
      });

      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
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
};
