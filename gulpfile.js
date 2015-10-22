var gulp = require('gulp');

gulp.task('default', function() {
   //
});



var less = require('gulp-less');
var path = require('path');


var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
 
gulp.task('one', function () {
  return gulp.src('./css/bedtime.less')
    .pipe(less({
      paths: [ path.join(__dirname)]//, 'less', 'includes') ]
    }))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
	.pipe(minifycss())
	 .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('two', function () {
 
    return gulp.src('./css/*.css')
        //.pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/out'));
});

gulp.task('js', function () {
  return gulp.src('./js/index.js')
        .pipe(uglify())    //压缩
	 .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js'));
});