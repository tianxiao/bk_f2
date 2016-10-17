// npm install --save del
// npm install copy-dir


const del = require('del');

 
del(['D:/Users/feichao/workspace/toposerver/resource/public/*'], {force:true}).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));

    var copydir = require('copy-dir');
    copydir.sync('J:/web/bk_re2/bk_f2/ng_webpack/dist', 'D:/Users/feichao/workspace/toposerver/resource/public');
});


