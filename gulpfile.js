var gulp = require('gulp');

gulp.task('default', function() {
   //将你的默认的任务代码放在这
});



var less = require('gulp-less');
var path = require('path');
 
gulp.task('one', function () {
  return gulp.src('./css/bedtime.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('two', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
 
    return gulp.src('./css/*.css')
        //.pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/out'));
});