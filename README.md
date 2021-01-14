# template-elm-chrome-extension

A template repository for building a chrome extension with webpack and elm.

## Technologies

### Web

- [ELM](https://elm-lang.org/)
- [ES2015](http://es6-features.org/)
- [SASS](https://sass-lang.com/documentation/syntax)

### Module bundler: Webpack

##### Plugins

- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) to clean the output directory before every build
- [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) to copy static resources to the output directory
- [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) to extract CSS stylesheets as a separate bundle to the output directory
- [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) to optimize the extracted CSS
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) to inject entry-points into the startup html page to the output directory
- [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) to minify JavaScript before bundling them to the output directory

##### Loaders

- [html-loader](https://www.npmjs.com/package/html-loader) to bundle html entry points
- [style-loader](https://www.npmjs.com/package/style-loader) to bundle CSS stylesheets
- [css-loader](https://www.npmjs.com/package/css-loader) to work with style-loader for bundling of CSS stylesheets
- [sass-loader](https://www.npmjs.com/package/sass-loader) to transpile SCSS into regular CSS
- [file-loader](https://www.npmjs.com/package/file-loader) to work with other file types
- [eslint-loader](https://www.npmjs.com/package/eslint-loader) to run ESLint on JavaScript files
- [babel-loader](https://www.npmjs.com/package/babel-loader) to perform babel transpilations with the help of supporting dependencies
- [elm-webpack-loader](https://www.npmjs.com/package/elm-webpack-loader) to load elm files

##### Supporting dependencies

- [babel-core](https://www.npmjs.com/package/babel-core), [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) to support babel-loader
- [eslint](https://www.npmjs.com/package/eslint), [babel-eslint](https://www.npmjs.com/package/babel-eslint), to support eslint-loader in running ESLint to lint JavaScript files
- [sass](https://www.npmjs.com/package/less) to help sass-loader with transpilation of SCSS into regular CSS
- [webpack-merge](https://www.npmjs.com/package/webpack-merge) to be able to use a common configuration across _dev_ and _prod_
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) to be able to live-reload the web-browser when run in _live_ mode.

##### Commands

- `npm run debug` to run Webpack with development configuration.  
  In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
- `npm run dev` to run Webpack with development configuration and keep watching for file changes within source.  
  In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
- `npm run live` to run Webpack with development configuration and keep watching for file changes within source and reload the web-browser on every change.  
  In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser and provides a live-development experience.
- `npm run build` to run Webpack with production configuration.  
  In this mode, Webpack minifies the JavaScript bundles and there are no source-maps created.
- `npm run prod` to run Webpack with production configuration and produce a zipped output folder
