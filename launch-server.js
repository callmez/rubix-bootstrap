#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var sh = require('execSync');
var Glue = require('gluejs');
var chokidar = require('chokidar');
var child_process = require('child_process');

// if required!!!
//    sh.run("rm -rf ./server");
//    sh.run("lein trampoline with-profile nodejs cljsbuild once");

(function () {
  var watcher = chokidar.watch('./src/nodejs', {
    persistent: true
  });

  var child = null;
  var run = function() {
    // sh.run("lein trampoline with-profile nodejs cljsbuild once");
    if(child) child.kill();
    child = child_process.spawn(process.execPath, ['./server.js'], {
      env: process.env,
      stdio: ['ipc']
    });
    child.stdout.on('data', function(data) {
      console.log(data.toString().trim());
    });
    child.stderr.on('data', function(data) {
      console.log(data.toString().trim());
    });
  };

  watcher.on('change', function() {
    run();
  });

  run();
})();

(function () {
  var watcher = chokidar.watch('./resources/public/js/lib', {
    persistent: true
  });

  var run = function() {
    new Glue()
      .basepath(process.cwd())
      .include('resources/public/js/lib/bootstrap')
      .include('resources/public/js/lib/main.js')
      .main('resources/public/js/lib/main.js')
      .render(fs.createWriteStream('resources/public/js/main.js'));
  };

  watcher.on('change', function() {
    run();
  });

  run();
})();

(function () {
  var watcher = chokidar.watch('./resources/public/js/lib', {
    persistent: true
  });

  var run = function() {
    new Glue()
      .basepath(process.cwd())
      .include('resources/public/js/lib/bootstrap')
      .include('resources/public/js/lib/export.js')
      .main('resources/public/js/lib/export.js')
      .render(fs.createWriteStream('resources/public/js/export.js'));
  };

  watcher.on('change', function() {
    run();
  });

  run();
})();

function createTest(filename) {
  var watcher = chokidar.watch('./resources/public/js/lib', {
    persistent: true
  });

  var run = function() {
    new Glue()
      .basepath(process.cwd())
      .include('resources/public/js/lib/bootstrap')
      .include('resources/public/js/lib/tests/'+filename+'.js')
      .main('resources/public/js/lib/tests/'+filename+'.js')
      .render(fs.createWriteStream('resources/public/js/'+filename+'.js'));
  };

  watcher.on('change', function() {
    run();
  });

  run();
}

createTest('grid_test');
createTest('row_test');
createTest('col_test');
