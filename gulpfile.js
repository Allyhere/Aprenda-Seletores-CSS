let gulp = require('gulp');
// Requires the gulp-sass plugin
let sass = require('gulp-sass');
// let browserSync = require('browser-sync').create();

//======================prism====================================================================================================================================

let highlight = require('gulp-prism');
 
gulp.task('default', function () {
    gulp.src('index.html')
        .pipe(highlight())
        .pipe(gulp.dest('dist'));
});

// ===================================================================================================================================================================

//aprende essa sitaxe aqui ó
/*gulp.task('task-name', function () {
    return gulp.src('source-files') // Get source files with gulp.src
      .pipe(aGulpPlugin()) // Sends it through a gulp plugin
      .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
  })*/


gulp.task('sass', function() {
  return gulp.src('assets/style/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('assets/style'))
})


// Gulp watch syntax
//gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){


  gulp.task('watch', function(){
    gulp.watch('assets/style/**/*.scss', gulp.series(['sass'])); 
    // Other watchers
  })
