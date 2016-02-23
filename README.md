# Pug(former jade) beautify
    This tiny program is format a pug(former jade) template file.
    For reusability, it's made as a module suggested by @Glaving001
    https://github.com/vingorius/jade-beautify/issues/7
## Installation
    npm install pug-beautify
## How to use
```javascript
var fs = require('fs');
var pugBeautify = require('pug-beautify');
var code = fs.readFile('sample.jade','utf8');
var option = {
    fill_tab: true,
    omit_div: false,
    tab_size: 4
};
try {
    var output = pugBeautify(code,option);
}catch(error){
    // Error occurred
}
```
## Todo
