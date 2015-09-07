var fs = require('fs');
var path = require('path');

var exp = /(;\(function\(\){\nvar \w,\w+=this)(;)/;
var p = path.join(process.cwd(),
                 'resources',
                 'public',
                 'js',
                 'app.min.js')

var file = fs.readFileSync(p).toString();
file = file.replace(exp, '$1||window;');

fs.writeFileSync(p, file);
