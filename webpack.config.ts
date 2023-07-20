import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './domains/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    clean: true 
  },
};

export default config;