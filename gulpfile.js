var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass' , function () {
    return gulp.src(['scss/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function () {
    gulp.watch(['scss/**/*.sass','scss/**/*.scss'],['sass']);
});
gulp.task('default', ['watch']);