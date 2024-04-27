var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'fonticons';
const concat = require('gulp-concat');

function scripts() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
}

exports.default = scripts;


gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
})

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});


gulp.task('watch', gulp.parallel('sass', 'browserSync', function (){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
}));

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('copyicons', function() {
  return gulp.src('app/icons/**/*')
  .pipe(gulp.dest('dist/icons'))
});

gulp.task('build', gulp.series('sass', 'useref'));

gulp.task('iconfont', function(){
    return gulp.src('app/svg/*.svg')
      .pipe(iconfontCss({
        fontName: fontName,
        path: 'app/config/icon-font-config.scss',
        targetPath: '../base/_icon-font.scss', // The path where the file will be generated
        fontPath: '../scss/icons/' // The path to the icon font file
      }))
      .pipe(iconfont({
        prependUnicode: false, // Recommended option 
        fontName: fontName, // Name of the font
        formats: ['woff2', 'woff', 'ttf'], // The font file formats that will be created
        normalize: true,
        timestamp: runTimestamp // Recommended to get consistent builds when watching files
      }))
      .pipe(gulp.dest('app/scss/icons/'));
});

// Test

// Recommended to get consistent builds when watching files