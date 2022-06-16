const gulp = require('gulp');
// // const plumber = require('gulp-plumber');
// // const sourcemap = require('gulp-sourcemaps');
// // const sass = require('gulp-sass');
// // const postcss = require('gulp-postcss');
// // const autoprefixer = require('autoprefixer');
// // const server = require('browser-sync').create();
// // const csso = require('gulp-csso');
const rename = require('gulp-rename');
// // const imagemin = require('gulp-imagemin');
// const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
// const del = require('del');
// const webpackStream = require('webpack-stream');
// const webpackConfig = require('./webpack.config.js');
// const fileinclude = require('gulp-file-include');
// const htmlbeautify = require('gulp-html-beautify');
// const gcmq = require('gulp-group-css-media-queries');
// const css = () => {
//   return gulp.src('source/sass/style.scss')
//     .pipe(plumber({
//       errorHandler: function (err) {
//         console.log(err.message);
//         this.emit('end');
//       }
//   }))
//       .pipe(sourcemap.init())
//       .pipe(sass())
//       .pipe(postcss([autoprefixer({
//         grid: true,
//       })]))
//       .pipe(gcmq()) // выключите, если в проект импортятся шрифты через ссылку на внешний источник
//       .pipe(gulp.dest('build/css'))
//       .pipe(csso())
//       .pipe(rename('style.min.css'))
//       .pipe(sourcemap.write('.'))
//       .pipe(gulp.dest('build/css'))
//       .pipe(server.stream());
// };


const sprite = () => {
  return gulp.src('img/svg/*.svg')
      .pipe(svgstore({inlineSvg: true}))
      .pipe(rename('sprite_auto.svg'))
      .pipe(gulp.dest('build/img'));
};
exports.sprite = sprite;



const copy = () => {
  return gulp.src([
    'source/fonts/**',
    'source/img/**',
    'source/data/**',
    'source/favicon/**',
    'source/video/**', // git искажает видеофайлы, некоторые шрифты, pdf и gif - проверяйте и если обнаруживаете баги - скидывайте тестировщику такие файлы напрямую
    'source/downloads/**',
    'source/*.php',
  ], {
    base: 'source',
  })
      .pipe(gulp.dest('build'));
};

const clean = () => {
  return del('build');
};

// Optional tasks
//---------------------------------

// Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
// а не все изображения в img во всех папках.

// root = `` - по дефолту webp добавляются и обналяются во всех папках в source/img/
// root = `content/` - webp добавляются и обновляются только в source/img/content/


const start = gulp.series(clean, copy, sprite);

// exports.build = build;
exports.start = start;
// exports.webp = createWebp;
// exports.imagemin = optimizeImages;
