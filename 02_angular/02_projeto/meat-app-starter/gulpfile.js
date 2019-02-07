const { task, src, dest, parallel } = require('gulp');

const jsonServer = require('gulp-json-srv');
let server = jsonServer.create();

task('start', () => {
  return src('db.json')
    .pipe(server.pipe());
});
