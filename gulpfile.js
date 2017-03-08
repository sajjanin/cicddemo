const gulp = require('gulp');
const ts = require('gulp-typescript');


var mocha = require('gulp-mocha');
var util = require('gulp-util');


// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('test', function () {

  return gulp.src(['test/**/*.test.ts'], { read: false })

    .pipe(mocha({
      reporter: 'spec',
      compilers: 'ts:ts-node/register  test/**/*.test.ts'
    }))
    .on('error', util.log);
});

gulp.task('watch-test', function () {
  gulp.watch(['views/**', 'public/**', 'app.js', 'src/**/*.ts', 'test/**'], ['test']);
});

gulp.task('default', ['watch']);
