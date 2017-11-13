/**
 * Created by Akshay on 07/09/17.
 */

var gulp = require('gulp'),
  chalk = require('chalk'),
  nodemon = require('gulp-nodemon');


  gulp.task('start', function() {
    nodemon({
        script: 'server/app.js',
      })
      .on('restart', function() {
        console.log(chalk.bgGreen('Server restarted successfully!'));
      })
  })

gulp.task('default', ['start']);