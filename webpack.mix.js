let mix = require("laravel-mix");

mix.browserSync({
  proxy: "http://portfolio-new.local",
  files: [
    "**/*.html",
    "dist/css/**/*.css",
    "dist/js/**/*.js",
    "dist/js/**/*.vue",
  ],
});

mix.setPublicPath("./dist");

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{ loader: "svg-inline-loader" }],
      },
    ],
  },
});

mix
  .js("src/js/app.js", "dist/js")
  .react()
  .sass("src/sass/style.scss", "dist/css")
  .options({
    processCssUrls: false,
  });
